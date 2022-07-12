import { useRef } from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import InfoBox from '../../molecules/InfoBox/InfoBox';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import OptionsPanel from '../OptionsPanel/OptionsPanel';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';
import SongList from '../SongList/SongList';

const PlayerBody = () => {
	const { state, dispatch } = usePlayerHandler();
	const audioRef = useRef<HTMLAudioElement>(null);

	return (
		<div className='flex gap-1 flex-col justify-between items-center px-2 pb-3 pt-2  max-w-sm w-full h-screen max-h-[650px] backdrop-blur-md drop-shadow-standardShadow bg-backgroundSecond rounded-xl overflow-hidden'>
			<audio src={state.currentSong.source ? state.currentSong.source : ''} ref={audioRef}></audio>
			<SongList state={state} dispatch={dispatch} audioRef={audioRef} />
			<ImageBox coverImg={state.currentSong.image} />
			<InfoBox author={state.currentSong.author} title={state.currentSong.title} />
			<OptionsPanel state={state} dispatch={dispatch} audioRef={audioRef} />
			<ProgressBar state={state} dispatch={dispatch} audioRef={audioRef} />
			<ButtonsPanel state={state} dispatch={dispatch} audioRef={audioRef} />
		</div>
	);
};
export default PlayerBody;
