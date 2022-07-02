import React, { useEffect, useState } from 'react';
import Timer from '../../atoms/Timer/Timer';
import { usePlayerHandler, RefReducerPack } from '../../../hooks/usePlayerHandler';

export interface SongTime {
	elapsedTime: number;
	durationTime: number;
}
const initialState: SongTime = {
	elapsedTime: 0,
	durationTime: 0,
};

const ProgressBar = ({ audioRef, state, dispatch }: RefReducerPack) => {
	// const [barProgress, setBarProgress] = useState<number>(0);
	const [timeData, setTimeData] = useState<SongTime>(initialState);
	const [targetPercent, setTargetPercent] = useState<number>(0);

	function countTime() {
		if (audioRef.current) setTimeData({ ...timeData, elapsedTime: Math.floor(audioRef.current!.currentTime) });
		if (timeData.durationTime === 0 || timeData.durationTime !== Math.floor(audioRef.current?.duration!)) {
			setTimeData({ ...timeData, durationTime: Math.floor(audioRef.current?.duration!) });
		}
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 1000);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, timeData, audioRef.current?.duration]);

	let barProgress = (timeData.elapsedTime! / timeData.durationTime!) * 100;
	// setBarProgress((timeData.elapsedTime! / timeData.durationTime!) * 100);

	function updateProgress(e?: any) {
		let barTargetPercent = Math.floor((e.nativeEvent.offsetX / e.target.closest('div').offsetWidth) * 100);
		setTargetPercent(barTargetPercent);
	}

	return (
		<div className='flex flex-col h-[3rem] w-full'>
			<Timer classContent='self-end' time={timeData.durationTime} />
			<div
				onClick={e => updateProgress(e)}
				className='relative w-full h-[10px] bar rounded-full bg-primaryPastel cursor-pointer'
				aria-label='Progress bar of song'>
				<span style={{ width: `${targetPercent}%` }} className={`h-full absolute left-[1px] rounded-full bg-primary`}>
					<Timer classContent='absolute top-[10px] right-0  translate-x-[100%]' time={timeData.elapsedTime!} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
