import { useEffect } from 'react';
import Timer from '../../atoms/Timer/Timer';
import { RefReducerPack } from '../../../hooks/usePlayer';
import { useSongSwitcher, SwitchMode } from '../../../hooks/useSongSwitcher';

const ProgressBar = ({ audioRef, state, dispatch }: RefReducerPack) => {
	const { elapsedTime, setElapsedTime, barProgress, setBarProgress, switchSong } = useSongSwitcher({
		audioRef,
		state,
		dispatch,
	});

	// const switchSong = useCallback((mode: SwitchMode): void => {
	// 	if (mode === SwitchMode.NEXT) {
	// 		dispatch({ type: ACTIONS.NEXT_SONG });
	// 	} else if (mode === SwitchMode.PREVIOUS) {
	// 		dispatch({ type: ACTIONS.PREV_SONG });
	// 	}

	// 	if (state.songStatus) {
	// 		console.log('gra ');
	// 		setTimeout(() => {
	// 			audioRef.current?.play();
	// 			setElapsedTime(0);
	// 		}, 100);
	// 	}
	// }, []);

	useEffect(() => {
		if (state.songStatus) console.log('widzistatus');
		window.addEventListener('keydown', e => {
			if (e.code === 'ArrowRight') {
				switchSong(SwitchMode.NEXT);
			} else if (e.code === 'ArrowLeft') {
				switchSong(SwitchMode.PREVIOUS);
			}
		});
	}, [switchSong, state.songStatus]);

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 200);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, state.duration, elapsedTime]);

	function updateBarProgress(e: any) {
		let barTargetPercent = Math.floor((e.nativeEvent.offsetX / e.target.closest('div').offsetWidth) * 100);
		setBarProgress(barTargetPercent);
		countTime();
		setElapsedTime(Math.floor(state.duration * (barTargetPercent / 100)));
		if (audioRef.current) audioRef.current!.currentTime = Math.floor(state.duration * (barTargetPercent / 100));
	}

	function countTime() {
		if (audioRef.current && state.songStatus) setElapsedTime(Math.floor(audioRef.current!.currentTime));
		setBarProgress((elapsedTime! / state.duration) * 100);
		if (elapsedTime >= state.duration && elapsedTime > 10) {
			switchSong(SwitchMode.NEXT);
		}
	}

	// function switchSong(mode: SwitchMode): void {
	// 	if (mode === SwitchMode.NEXT) {
	// 		dispatch({ type: ACTIONS.NEXT_SONG });
	// 	} else if (mode === SwitchMode.PREVIOUS) {
	// 		dispatch({ type: ACTIONS.PREV_SONG });
	// 	}

	// 	setTimeout(() => {
	// 		audioRef.current?.play();
	// 		setElapsedTime(0);
	// 	}, 100);
	// }

	return (
		<div className='flex flex-col h-auto w-full pb-1'>
			<Timer classContent='self-end' time={state.duration} />
			<div
				onClick={e => updateBarProgress(e)}
				className='relative w-full h-1 bar rounded-full bg-lightGrey cursor-pointer'
				aria-label='Progress bar of song'>
				<span style={{ width: `${barProgress}%` }} className={`h-full  absolute left-[1px] rounded-full bg-primary`}>
					<Timer
						classContent={`absolute top-[10px] right-0 ${barProgress > 50 ? 'translate-x-[0]' : 'translate-x-[100%]'} `}
						time={elapsedTime!}
					/>
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
