import { useEffect, useCallback } from 'react';
import Timer from '../../atoms/Timer/Timer';
import { RefReducerPack } from '../../../hooks/usePlayer';
import { useSongSwitcher, SwitchMode } from '../../../hooks/useSongSwitcher';
import { ACTIONS } from '../../../hooks/actions';

const ProgressBar = ({ audioRef, state, dispatch }: RefReducerPack) => {
	const { elapsedTime, setElapsedTime, barProgress, setBarProgress, switchSong } = useSongSwitcher({
		audioRef,
		state,
		dispatch,
	});

	// console.log(state.songStatus, state.songIndex);
	useEffect(() => {
		function listenerHandler(e: KeyboardEvent) {
			if (e.code === 'ArrowRight') {
				switchSong(SwitchMode.NEXT);
			} else if (e.code === 'ArrowLeft') {
				switchSong(SwitchMode.PREVIOUS);
			}
		}
		window.addEventListener('keydown', listenerHandler);

		return () => window.removeEventListener('keydown', listenerHandler);
	}, [state.songStatus]);

	useEffect(() => {
		const intervalId: NodeJS.Timer = setInterval(countTime, 200);
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
