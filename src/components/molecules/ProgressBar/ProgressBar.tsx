import React, { useEffect, useState } from 'react';
import Timer from '../../atoms/Timer/Timer';
import { usePlayerHandler, RefReducerPack } from '../../../hooks/usePlayerHandler';
import { ACTIONS } from '../../../hooks/actions';

export interface SongTime {
	elapsedTime: number;
	durationTime: number;
}
const initialState: SongTime = {
	elapsedTime: 0,
	durationTime: 0,
};

const ProgressBar = ({ audioRef, state, dispatch }: RefReducerPack) => {
	const [timeData, setTimeData] = useState<SongTime>(initialState);
	const [barProgress, setBarProgress] = useState<number>(0);

	function updateProgress(e: any) {
		let barTargetPercent = Math.floor((e.nativeEvent.offsetX / e.target.closest('div').offsetWidth) * 100);
		setBarProgress(barTargetPercent);

		// console.log(state);
		// USTAWIANIE KLIKNIETEGO CZASU
		countTime();
		setTimeData({ ...timeData, elapsedTime: Math.floor(timeData.durationTime * (barTargetPercent / 100)) });
		if (audioRef.current) audioRef.current!.currentTime = Math.floor(timeData.durationTime * (barTargetPercent / 100));
	}
	function countTime() {
		if (audioRef.current) setTimeData({ ...timeData, elapsedTime: Math.floor(audioRef.current!.currentTime) });
		if (timeData.durationTime === 0 || timeData.durationTime !== Math.floor(audioRef.current?.duration!)) {
			setTimeData({ ...timeData, durationTime: Math.floor(audioRef.current?.duration!) });
		}
		setBarProgress((timeData.elapsedTime! / timeData.durationTime!) * 100);

		if (timeData.elapsedTime === timeData.durationTime && timeData.elapsedTime > 10) {
			dispatch({ type: ACTIONS.NEXT_SONG });
			setTimeData({ durationTime: 0, elapsedTime: 0 });
			dispatch({ type: ACTIONS.TOGGLE_SONG });
		}
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 200);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, timeData, audioRef.current?.duration]);

	return (
		<div className='flex flex-col h-[3rem] w-full'>
			<Timer classContent='self-end' time={timeData.durationTime} />
			<div
				onClick={e => updateProgress(e)}
				className='relative w-full h-[10px] bar rounded-full bg-primaryPastel cursor-pointer'
				aria-label='Progress bar of song'>
				<span style={{ width: `${barProgress}%` }} className={`h-full absolute left-[1px] rounded-full bg-primary`}>
					<Timer classContent='absolute top-[10px] right-0  translate-x-[100%]' time={timeData.elapsedTime!} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
