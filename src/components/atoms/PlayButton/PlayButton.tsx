import React from 'react';
import playBtn from '../../../assets/playButton.svg';
import pauseBtn from '../../../assets/pauseButton.svg';

const PlayButton: React.FC<{ songState: 'start' | 'stop' }> = ({ songState = 'start' }) => {
	return (
		<button className=' rounded-full p-2 bg-primaryDark transition-transform ease  hover:scale-90'>
			<img className='h-1.5' src={songState === 'start' ? playBtn : pauseBtn} alt='Przycisk start' />
		</button>
	);
};

export default PlayButton;
