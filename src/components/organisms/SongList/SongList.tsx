import React from 'react';
import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import SongCard from '../../molecules/SongCard/SongCard';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import CardWrapper from '../../molecules/CardWrapper/CardWrapper';
import { songs } from '../../../songs';
const SongList = ({ state, dispatch, audioRef }: RefReducerPack) => {
	return (
		<div className='flex flex-col justify-start items-center gap-3 absolute bottom-0 left-0 w-full h-[80%] p-1 bg-primary z-40 rounded-t-md '>
			<CloseButton />

			<CardWrapper>
				{songs.map(song => (
					<SongCard
						title={song.title}
						author={song.author}
						state={state}
						dispatch={dispatch}
						audioRef={audioRef}
						key={song.id + '-' + 'song'}
					/>
				))}
			</CardWrapper>
		</div>
	);
};

export default SongList;
