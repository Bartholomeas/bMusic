import { useRef } from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import InfoBox from '../../molecules/InfoBox/InfoBox';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import OptionsPanel from '../OptionsPanel/OptionsPanel';
import { usePlayerHandler } from '../../../hooks/usePlayer';
import SongList from '../SongList/SongList';

const PlayerBody = () => {
	const { state, dispatch } = usePlayerHandler();
	const audioRef = useRef<HTMLAudioElement>(null);

	return (
		<div className='relative app-wrapper flex gap-1 flex-col justify-start items-center px-2 pb-3 pt-2 w-full h-full drop-shadow-standardShadow bg-backgroundSecond rounded-xl overflow-hidden md:max-h-[650px] max-h-screen max-w-sm'>
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
