import { useEffect, useRef } from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import InfoBox from '../../molecules/InfoBox/InfoBox';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';

const PlayerBody = () => {
	const { state, dispatch } = usePlayerHandler();
	const audioRef = useRef<HTMLAudioElement>(null);

	let elapsedTime = 0;
	function countTime() {
		if (audioRef.current) elapsedTime = Math.floor(audioRef.current.currentTime);
		console.log(elapsedTime);
	}

	let intervalId: NodeJS.Timer;
	useEffect(() => {
		intervalId = setInterval(countTime, 1000);
		if (!state.songStatus) clearInterval(intervalId);
		return () => clearInterval(intervalId);
	}, [state.songStatus]);

	const audioDuration = audioRef.current?.duration;
	if (audioDuration) {
		console.log(audioDuration);
	}

	return (
		<div className='flex gap-2 flex-col justify-between items-center px-2 pb-3 pt-2  max-w-md w-full h-screen max-h-[600px]   backdrop-blur-md drop-shadow-standardShadow bg-backgroundSecond rounded-xl'>
			<audio src={state.currentSong.source} ref={audioRef}></audio>
			<ImageBox />
			<InfoBox />
			<ButtonsPanel state={state} dispatch={dispatch} audioRef={audioRef} />
			<ProgressBar audioDuration={audioDuration} elapsedTime={elapsedTime} />
		</div>
	);
};

export default PlayerBody;
