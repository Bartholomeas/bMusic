import { RefObject } from 'react';
import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import prev from '../../../assets/prevButton.svg';
import next from '../../../assets/nextButton.svg';
import loop from '../../../assets/loopButton.svg';
import random from '../../../assets/randomButton.svg';
import list from '../../../assets/listButton.svg';
import volume from '../../../assets/volumeButton.svg';
import { RefReducerPack } from '../../../hooks/usePlayerHandler';

const ButtonsPanel = ({ state, dispatch, audioRef }: RefReducerPack) => {
	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG });
		if (!state.songStatus) {
			audioRef.current?.play();
			// console.log(state.songStatus);
		} else {
			audioRef.current?.pause();
		}
		return;
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			<div className='flex justify-between'>
				<PlayerButton additionalClass='h-[20px]' btnType={volume} />
				<PlayerButton additionalClass='h-[20px]' btnType={list} />
			</div>
			<div className='flex justify-between gap-1 items-center w-full'>
				<PlayerButton additionalClass='h-[20px]' btnType={random} />
				<PlayerButton btnType={prev} />
				<PlayButton state={state} reducerFunction={() => toggleSong()} />
				<PlayerButton btnType={next} />
				<PlayerButton additionalClass='h-[20px]' btnType={loop} />
			</div>
		</div>
	);
};

export default ButtonsPanel;
