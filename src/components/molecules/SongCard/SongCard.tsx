import { useState } from 'react';
import { ACTIONS } from '../../../hooks/actions';
import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import ListPlayButton from '../../atoms/ListPlayButton/ListPlayButton';

type CardProps = RefReducerPack & {
	title: string;
	author: string;
	songId: number;
};

const SongCard = ({ title, author, songId, dispatch, state, audioRef }: CardProps) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG, payload: songId.toString() });

		setTimeout(() => {
			audioRef.current?.play();
			setIsPlaying(true);
		}, 100);

		if (songId === state.id && state.songStatus && isPlaying) {
			setTimeout(() => {
				audioRef.current?.pause();
				console.log('pauze');
				setIsPlaying(false);
			}, 200);
		}

		return;
	}
	return (
		<div className='flex flex-row gap-2 h-5 p-[7px] w-full items-center justify-start rounded-full bg-primaryDark'>
			<ListPlayButton
				isPlaying={songId === state.id && state.songStatus ? true : false}
				reducerFunction={() => toggleSong()}
			/>
			<div>
				<p className='font-bold text-sm text-accentColor '>{title}</p>
				<p className='text-xs text-accentColor'>{author}</p>
			</div>
		</div>
	);
};

export default SongCard;
