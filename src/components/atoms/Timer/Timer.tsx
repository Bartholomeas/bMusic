import React from 'react';

const Timer: React.FC<{ time: number; classContent?: string }> = ({ time, classContent }) => {
	const minutes = Math.floor(time / 60);

	return <p className={classContent || ''}> {`${minutes}:${time % 60}`}</p>;
};
export default Timer;
