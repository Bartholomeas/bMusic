import React from 'react';
// import prev from '../../../assets/prevButton.svg';
// import next from '../../../assets/nextButton.svg';
// import loop from '../../../assets/loopButton.svg';
// import random from '../../../assets/randomButton.svg';
// import list from '../../../assets/listButton.svg';

const PlayerButton: React.FC<{ btnType: string; additionalClass?: string }> = ({ btnType, additionalClass }) => {
	return (
		<button className={`p-1 transition-transform ease  hover:scale-90 `}>
			<img className={`${additionalClass} `} src={btnType} alt='Przycisk poprzedni utwór' />
		</button>
	);
};

export default PlayerButton;
