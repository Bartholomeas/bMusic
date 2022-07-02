import React, { useState } from 'react';
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
	const [isOpen, setIsOpen] = useState<boolean>(false);
	if (audioRef.current) audioRef.current!.volume = 1;
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
		dispatch({ type: ACTIONS.NEXT_SONG });
	}
	function prevSong() {
		dispatch({ type: ACTIONS.PREV_SONG });
	}

	function toggleVolume() {
		setIsOpen(!isOpen);
	}
	function handleVolume(e: any) {
		if (audioRef.current) audioRef.current!.volume = e.target.value / 100;
	}

	function loopSong() {
		dispatch({ type: ACTIONS.LOOP_SONG });
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			<div className='flex justify-between items-center'>
				<PlayerButton
					additionalClass='volume h-[20px]'
					btnType={volume}
					reducerFunction={() => toggleVolume()}
					additionalFunction={e => handleVolume(e)}
					isOpen={isOpen}
				/>
				<PlayerButton additionalClass='h-[20px]' btnType={list} />
			</div>
			<div className='flex justify-between gap-1 items-center w-full'>
				<PlayerButton additionalClass='h-[20px]' btnType={random} />
				<PlayerButton btnType={prev} reducerFunction={() => prevSong()} />
				<PlayButton state={state} reducerFunction={() => toggleSong()} />
				<PlayerButton state={state} reducerFunction={() => nextSong()} btnType={next} />
				<PlayerButton additionalClass='h-[20px]' btnType={loop} />
			</div>
		</div>
	);
};

export default ButtonsPanel;
