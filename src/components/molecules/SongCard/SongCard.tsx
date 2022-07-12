import { ACTIONS } from '../../../hooks/actions';
import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import ListPlayButton from '../../atoms/ListPlayButton/ListPlayButton';

type CardProps = RefReducerPack & {
	title: string;
	author: string;
	songId: number;
};

const SongCard = ({ title, author, songId, dispatch, state, audioRef }: CardProps) => {
	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG, payload: songId.toString() });
		setTimeout(() => {
			if (!state.songStatus) {
				audioRef.current?.play();
			} else {
				audioRef.current?.pause();
			}
		}, 100);
		return;
	}

	return (
		<div className='flex flex-row gap-2 h-5 p-[7px] w-full items-center justify-start rounded-full bg-primaryDark'>
			<ListPlayButton state={state} reducerFunction={() => toggleSong()} />
			<div>
				<p className='font-bold text-sm text-accentColor '>{title}</p>
				<p className='text-xs text-accentColor'>{author}</p>
			</div>
		</div>
	);
};

export default SongCard;
