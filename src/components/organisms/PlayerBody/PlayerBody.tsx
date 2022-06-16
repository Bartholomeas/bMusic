import { useRef } from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import InfoBox from '../../molecules/InfoBox/InfoBox';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';

const PlayerBody = () => {
	const { state, dispatch } = usePlayerHandler();
	const audioRef = useRef<HTMLAudioElement>(null);

	let elapsedTime = 0;

	let counterInterval: NodeJS.Timer;
	function countTime(toggleInterval: boolean) {
		console.log(toggleInterval);
		toggleInterval
			? (counterInterval = setInterval(() => {
					elapsedTime++;
					if (audioRef.current) console.log(Math.floor(audioRef.current.currentTime));
			  }, 1000))
			: clearInterval(counterInterval);
	}
	if (state.songStatus) {
		countTime(true);
	} else {
		countTime(false);
	}

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
