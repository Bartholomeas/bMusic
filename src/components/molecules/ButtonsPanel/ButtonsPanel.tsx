import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import { RefReducerPack } from '../../../hooks/usePlayer';
import { FaAngleLeft, FaAngleRight, FaRandom, FaExchangeAlt } from 'react-icons/fa';

const ButtonsPanel = ({ state, dispatch, audioRef }: RefReducerPack) => {
	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG });
		if (!state.songStatus) {
			audioRef.current?.play();
		} else {
			audioRef.current?.pause();
		}
		return;
	}

	function nextSong() {
		dispatch({ type: ACTIONS.NEXT_SONG, payload: true });
		setTimeout(() => {
			if (state.songStatus) {
				audioRef.current!.play();
			}
		}, 100);
	}
	function prevSong() {
		dispatch({ type: ACTIONS.PREV_SONG, payload: true });
		setTimeout(() => {
			if (state.songStatus) audioRef.current!.play();
		}, 100);
	}

	function loopSong() {
		dispatch({ type: ACTIONS.LOOP_SONG });
	}

	function setRandom() {
		dispatch({ type: ACTIONS.RANDOM_SONG });
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			<div className='flex justify-between items-center w-full'>
				<PlayerButton
					reducerFunction={() => setRandom()}
					additionalClass={`loop ${state.isRandom ? 'fill-primary' : 'fill-coreGrey'}`}
					BtnType={FaRandom}
				/>
				<PlayerButton reducerFunction={() => prevSong()} BtnType={FaAngleLeft} />
				<PlayButton state={state} reducerFunction={() => toggleSong()} />
				<PlayerButton state={state} reducerFunction={() => nextSong()} BtnType={FaAngleRight} />
				<PlayerButton
					additionalClass={`loop ${state.onLoop ? 'fill-primary' : 'fill-coreGrey'}`}
					reducerFunction={() => loopSong()}
					BtnType={FaExchangeAlt}
				/>
			</div>
		</div>
	);
};

export default ButtonsPanel;
