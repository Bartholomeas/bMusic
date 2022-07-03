import React, { useState } from 'react';
import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
// import prev from '../../../assets/prevButton.svg';
// import next from '../../../assets/nextButton.svg';
// import loop from '../../../assets/loopButton.svg';
// import random from '../../../assets/randomButton.svg';
// import list from '../../../assets/listButton.svg';
// import volume from '../../../assets/volumeButton.svg';

import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import { FaAngleLeft, FaAngleRight, FaVolumeUp, FaRandom, FaExchangeAlt, FaListUl } from 'react-icons/fa';

const ButtonsPanel = ({ state, dispatch, audioRef }: RefReducerPack) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
		setTimeout(() => {
			if (state.songStatus) audioRef.current!.play();
		}, 100);
	}
	function prevSong() {
		dispatch({ type: ACTIONS.PREV_SONG });
		setTimeout(() => {
			if (state.songStatus) audioRef.current!.play();
		}, 100);
	}

	function toggleVolume() {
		setIsOpen(!isOpen);
	}
	function handleVolume(e: any) {
		if (audioRef.current) audioRef.current!.volume = e.target.value / 100;
		dispatch({ type: ACTIONS.CHANGE_VOLUME, payload: e.target.value / 100 });
	}

	function loopSong() {
		dispatch({ type: ACTIONS.LOOP_SONG });
		console.log(state);
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			<div className='flex justify-between items-center'>
				<PlayerButton
					additionalClass='volume'
					BtnType={FaVolumeUp}
					reducerFunction={() => toggleVolume()}
					additionalFunction={e => handleVolume(e)}
					isOpen={isOpen}
				/>
				<PlayerButton BtnType={FaListUl} />
			</div>
			<div className='flex justify-between items-center w-full'>
				<PlayerButton
					additionalClass={`loop ${state.isRandom ? 'fill-primary' : 'fill-primaryDark'}`}
					BtnType={FaRandom}
				/>
				<PlayerButton reducerFunction={() => prevSong()} BtnType={FaAngleLeft} />
				<PlayButton state={state} reducerFunction={() => toggleSong()} />
				<PlayerButton state={state} reducerFunction={() => nextSong()} BtnType={FaAngleRight} />
				<PlayerButton
					additionalClass={`loop ${state.onLoop ? 'fill-primary' : 'fill-primaryDark'}`}
					reducerFunction={() => loopSong()}
					BtnType={FaExchangeAlt}
				/>
			</div>
		</div>
	);
};

export default ButtonsPanel;
