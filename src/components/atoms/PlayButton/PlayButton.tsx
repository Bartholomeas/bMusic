import React from 'react';
import { SongState } from '../../../hooks/usePlayer';
import { FaPlay, FaPause } from 'react-icons/fa';

const PlayButton = ({ state, reducerFunction }: { state: SongState; reducerFunction: () => any }) => {
	return (
		<button
			onClick={reducerFunction}
			className=' rounded-full p-2 bg-coreGrey transition-transform ease  hover:scale-90'>
			{state.songStatus ? (
				<FaPause className='h-1.5 fill-backgroundSecond h-2 w-2' />
			) : (
				<FaPlay className='h-1.5 fill-backgroundSecond h-2 w-2' />
			)}
		</button>
	);
};

export default PlayButton;
