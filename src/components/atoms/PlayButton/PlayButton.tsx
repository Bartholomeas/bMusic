import React from 'react';
import playBtn from '../../../assets/playButton.svg';
import pauseBtn from '../../../assets/pauseButton.svg';
import { usePlayerHandler, SongState } from '../../../hooks/usePlayerHandler';
import { ACTIONS } from '../../../hooks/actions';

const PlayButton: React.FC<{ state: SongState; reducerFunction: () => any }> = ({ state, reducerFunction }) => {
	console.log(state.songStatus);
	return (
		<button
			onClick={reducerFunction}
			className=' rounded-full p-2 bg-primaryDark transition-transform ease  hover:scale-90'>
			{state.songStatus ? (
				<img className='h-1.5' src={pauseBtn} alt='Przycisk start' />
			) : (
				<img className='h-1.5' src={playBtn} alt='Przycisk start' />
			)}
		</button>
	);
};

export default PlayButton;
