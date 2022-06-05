import React from 'react';
import Bar from '../../atoms/Bar/Bar';
import Timer from '../../atoms/Timer/Timer';

const ProgressBar = () => {
	return (
		<div className='h-[3rem] w-full'>
			<Timer time={120} />
			<Bar isVolume={false} />
		</div>
	);
};

export default ProgressBar;
