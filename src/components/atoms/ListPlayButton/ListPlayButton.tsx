import { FaPlay, FaPause } from 'react-icons/fa';
import { SongState } from '../../../hooks/usePlayerHandler';

const ListPlayButton = ({ state, reducerFunction }: { state: SongState; reducerFunction: () => any }) => {
	return (
		<button
			onClick={reducerFunction}
			className=' rounded-full p-1 bg-accentColor transition-transform ease  hover:scale-90'>
			{state.songStatus ? (
				<FaPause className='h-1.5 fill-primaryDark h-1 w-1' />
			) : (
				<FaPlay className='h-1.5 fill-primaryDark h-1 w-1' />
			)}
		</button>
	);
};

export default ListPlayButton;
