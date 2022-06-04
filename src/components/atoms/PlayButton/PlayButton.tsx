import React from 'react';
import logo from '../../../assets/playButton.svg';

const PlayButton: React.FC = () => {
	return (
		<button className=' rounded-full p-2 bg-primaryDark transition-transform ease  hover:scale-90'>
			<img className='h-1.5' src={logo} alt='Przycisk start' />
		</button>
	);
};

export default PlayButton;
