import React from 'react';
import playBtn from '../../../assets/playButton.svg';
import pauseBtn from '../../../assets/pauseButton.svg';

const PlayButton: React.FC<{ toggleSongStatus: () => any }> = ({ toggleSongStatus }) => {
	console.log(toggleSongStatus);
	return (
		<button
			onClick={() => toggleSongStatus}
			className=' rounded-full p-2 bg-primaryDark transition-transform ease  hover:scale-90'>
			{toggleSongStatus ? (
				<img className='h-1.5' src={playBtn} alt='Przycisk start' />
			) : (
				<img className='h-1.5' src={pauseBtn} alt='Przycisk start' />
			)}
		</button>
	);
};

export default PlayButton;
