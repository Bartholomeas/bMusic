import React, { useEffect, useState } from 'react';
import Timer from '../../atoms/Timer/Timer';
import { usePlayerHandler, RefReducerPack } from '../../../hooks/usePlayerHandler';
import { ACTIONS } from '../../../hooks/actions';

export interface SongTime {
	elapsedTime: number;
}
const initialState: SongTime = {
	elapsedTime: 0,
};

const ProgressBar = ({ audioRef, state, dispatch }: RefReducerPack) => {
	const [timeData, setTimeData] = useState<SongTime>(initialState);
	const [barProgress, setBarProgress] = useState<number>(0);

	function updateBarProgress(e: any) {
		let barTargetPercent = Math.floor((e.nativeEvent.offsetX / e.target.closest('div').offsetWidth) * 100);
		setBarProgress(barTargetPercent);

		countTime();
		setTimeData({ elapsedTime: Math.floor(state.duration * (barTargetPercent / 100)) });
		if (audioRef.current) audioRef.current!.currentTime = Math.floor(state.duration * (barTargetPercent / 100));
	}

	function switchSong(): void {
		if (timeData.elapsedTime === state.duration && timeData.elapsedTime > 10) {
			dispatch({ type: ACTIONS.NEXT_SONG });
			setTimeout(() => {
				audioRef.current?.play();
			}, 100);
			setTimeData({ elapsedTime: 0 });
		}
	}

	function countTime() {
		if (audioRef.current && state.songStatus) setTimeData({ elapsedTime: Math.floor(audioRef.current!.currentTime) });
		// if (state.duration === 0 || state.duration !== Math.floor(audioRef.current?.duration!)) {

		// }
		setBarProgress((timeData.elapsedTime! / state.duration) * 100);
		console.log(barProgress);
		switchSong();
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 200);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, state.duration, timeData.elapsedTime]);

	return (
		<div className='flex flex-col h-[120px] w-full'>
			<Timer classContent='self-end' time={state.duration} />
			<div
				onClick={e => updateBarProgress(e)}
				className='relative w-full h-1 bar rounded-full bg-lightGrey cursor-pointer'
				aria-label='Progress bar of song'>
				<span style={{ width: `${barProgress}%` }} className={`h-full  absolute left-[1px] rounded-full bg-primary`}>
					<Timer classContent='absolute top-[10px] right-0  translate-x-[100%]' time={timeData.elapsedTime!} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
