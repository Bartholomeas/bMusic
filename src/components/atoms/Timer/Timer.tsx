import React from 'react';

const Timer: React.FC<{ time: number; classContent: string }> = ({ time = 0, classContent = '' }) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	// console.log(time);

	return <p className={classContent}> {`${minutes}:${seconds}`}</p>;
};
export default Timer;
