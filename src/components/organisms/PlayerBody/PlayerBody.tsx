import React from 'react';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import ButtonsPanel from '../../molecules/ButtonsPanel/ButtonsPanel';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';

const PlayerBody = () => {
	return (
		<div className='flex gap-2 flex-col justify-between items-center px-2 pb-1 pt-2  max-w-sm w-full h-screen max-h-[600px]   backdrop-blur-md drop-shadow-standardShadow bg-backgroundSecond rounded-xl'>
			<ImageBox />
			<ButtonsPanel />
			<ProgressBar />
		</div>
	);
};

export default PlayerBody;
