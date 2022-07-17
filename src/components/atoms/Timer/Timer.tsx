import React from 'react';

const Timer: React.FC<{ time: number; classContent: string }> = ({ time = 0, classContent = '' }) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return <p className={classContent}> {`0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>;
};
export default Timer;
