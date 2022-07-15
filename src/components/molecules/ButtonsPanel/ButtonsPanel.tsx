import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import { ReducerInterface } from '../../../hooks/usePlayer';
import { FaAngleLeft, FaAngleRight, FaRandom, FaExchangeAlt } from 'react-icons/fa';
import { useSongSwitcher, SwitchMode } from '../../../hooks/useSongSwitcher';

const ButtonsPanel = ({ state, dispatch, audioRef }: ReducerInterface) => {
	const { switchSong } = useSongSwitcher({ state, dispatch, audioRef });

	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG });
		if (!state.songStatus) {
			audioRef.current?.play();
		} else {
			audioRef.current?.pause();
		}
		return;
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
					additionalClass={` ${state.isRandom ? 'fill-primary' : 'fill-coreGrey'}`}
					BtnType={FaRandom}
				/>
				<PlayerButton reducerFunction={() => switchSong(SwitchMode.NEXT, true)} BtnType={FaAngleLeft} />
				<PlayButton state={state} reducerFunction={() => toggleSong()} />
				<PlayerButton reducerFunction={() => switchSong(SwitchMode.NEXT, true)} BtnType={FaAngleRight} />
				<PlayerButton
					additionalClass={` ${state.onLoop ? 'fill-primary' : 'fill-coreGrey'}`}
					reducerFunction={() => loopSong()}
					BtnType={FaExchangeAlt}
				/>
			</div>
		</div>
	);
};

export default ButtonsPanel;
