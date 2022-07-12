import React from 'react';
import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import ListPlayButton from '../../atoms/ListPlayButton/ListPlayButton';

type CardProps = RefReducerPack & {
	title: string;
	author: string;
};

const SongCard = ({ title, author, dispatch, state, audioRef }: CardProps) => {
	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG });
	}

	return (
		<div className='flex flex-row gap-2 h-5 p-[7px] w-full items-center justify-start rounded-full bg-primaryDark transition-transform hover:scale-95'>
			<ListPlayButton state={state} reducerFunction={() => toggleSong} />
			<div>
				<p className='font-bold text-sm text-accentColor '>{title}</p>
				<p className='text-xs text-accentColor'>{author}</p>
			</div>
		</div>
	);
};

export default SongCard;
