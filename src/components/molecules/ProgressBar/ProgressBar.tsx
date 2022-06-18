import { useEffect, useState } from 'react';
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
	const [timeData, setTimeData] = useState<SongTime>(initialState);

	function countTime() {
		if (audioRef.current) setTimeData({ ...timeData, elapsedTime: Math.floor(audioRef.current!.currentTime) });
		if (timeData.durationTime === 0) {
			setTimeData({ ...timeData, durationTime: Math.floor(audioRef.current?.duration!) });
		}
		// console.log(timeData);
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 1000);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, timeData]);

	console.log(timeData.elapsedTime, timeData.durationTime);

	let barProgress = (timeData.elapsedTime! / timeData.durationTime!) * 100;
	return (
		<div className='flex flex-col h-[3rem] w-full'>
			<Timer classContent='self-end' time={timeData.durationTime} />
			<div className='relative w-full h-[10px] bar rounded-full bg-primaryPastel' aria-label='Progress bar of song'>
				<span style={{ width: `${barProgress}%` }} className={`h-full absolute left-[0] rounded-full bg-primary`}>
					<Timer classContent='absolute top-[10px] right-0' time={timeData.elapsedTime!} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
