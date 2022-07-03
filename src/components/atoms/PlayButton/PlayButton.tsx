import React from 'react';
import { SongState } from '../../../hooks/usePlayerHandler';
import { FaPlay, FaPause } from 'react-icons/fa';

const PlayButton: React.FC<{ state: SongState; reducerFunction: () => any }> = ({ state, reducerFunction }) => {
	return (
		<button
			onClick={reducerFunction}
			className=' rounded-full p-2 bg-primaryDark transition-transform ease  hover:scale-90'>
			{state.songStatus ? (
				<FaPause className='h-1.5 fill-backgroundSecond h-2 w-2' />
			) : (
				<FaPlay className='h-1.5 fill-backgroundSecond h-2 w-2' />
			)}
		</button>
	);
};

export default PlayButton;
