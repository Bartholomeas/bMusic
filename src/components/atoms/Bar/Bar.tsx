import React from 'react';
import Timer from '../Timer/Timer';

const Bar = () => {
	return (
		<div className='relative w-full h-[5px] rounded-full  bg-primaryPastel'>
			<span className='absolute top-0 left-0 w-[200px] rounded-full h-full bg-primary'>
				<Timer classContent='absolute top-[3px] right-0' time={10} />
			</span>
		</div>
	);
};

export default Bar;
