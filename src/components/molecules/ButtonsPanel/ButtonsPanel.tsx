import React from 'react';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import prev from '../../../assets/prevButton.svg';
import next from '../../../assets/nextButton.svg';
import loop from '../../../assets/loopButton.svg';
import random from '../../../assets/randomButton.svg';
import list from '../../../assets/listButton.svg';

const ButtonsPanel: React.FC = () => {
	return (
		<div className='flex justify-between gap-1 items-center w-full'>
			<PlayerButton additionalClass='h-[20px]' btnType={random} />
			<PlayerButton btnType={prev} />
			<PlayButton songState='stop' />
			<PlayerButton btnType={next} />
			<PlayerButton additionalClass='h-[20px]' btnType={loop} />
		</div>
	);
};

export default ButtonsPanel;
