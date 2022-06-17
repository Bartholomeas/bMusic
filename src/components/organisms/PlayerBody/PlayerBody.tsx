import { useState, useEffect, useRef } from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import InfoBox from '../../molecules/InfoBox/InfoBox';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';

interface SongTime {
	elapsedTime?: number;
	durationTime?: number;
}
const initialState: SongTime = {
	elapsedTime: 0,
	durationTime: 0,
};

const PlayerBody = () => {
	const { state, dispatch } = usePlayerHandler();
	const [timeData, setTimeData] = useState<SongTime>(initialState);
	const audioRef = useRef<HTMLAudioElement>(null);

	function countTime() {
		if (audioRef.current) setTimeData({ ...timeData, elapsedTime: Math.floor(audioRef.current!.currentTime) });
		if (timeData.durationTime === 0)
			setTimeData({ ...timeData, durationTime: Math.floor(audioRef.current?.duration!) });
		console.log(timeData);
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 1000);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus, timeData]);

	// const audioDuration: number = audioRef.current?.duration !== undefined || null ? audioRef.current!.duration : 0;
	// console.log(audioDuration);
	return (
		<div className='flex gap-2 flex-col justify-between items-center px-2 pb-3 pt-2  max-w-md w-full h-screen max-h-[600px]   backdrop-blur-md drop-shadow-standardShadow bg-backgroundSecond rounded-xl'>
			<audio src={state.currentSong.source} ref={audioRef}></audio>
			<ImageBox />
			<InfoBox />
			<ButtonsPanel state={state} dispatch={dispatch} audioRef={audioRef} />
			<ProgressBar />
		</div>
	);
};
export default PlayerBody;
