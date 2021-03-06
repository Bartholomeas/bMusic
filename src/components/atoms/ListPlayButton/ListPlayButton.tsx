import { FaPlay, FaPause } from 'react-icons/fa';

const ListPlayButton = ({ isPlaying, reducerFunction }: { isPlaying: boolean; reducerFunction: () => any }) => {
	return (
		<button
			onClick={reducerFunction}
			className='rounded-full p-1 bg-accentColor transition-transform ease hover:scale-90'>
			{isPlaying ? (
				<FaPause className='h-1.5 fill-primaryDark h-1 w-1' />
			) : (
				<FaPlay className='h-1.5 fill-primaryDark h-1 w-1' />
			)}
		</button>
	);
};

export default ListPlayButton;
