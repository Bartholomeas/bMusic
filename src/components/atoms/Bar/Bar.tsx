import React from 'react';
import Timer from '../Timer/Timer';

const Bar: React.FC = () => {
	return (
		<div className=" 'w-full h-[10px] relative bar rounded-full bg-primaryPastel" aria-label='Progress bar of song'>
			<span className='w-[200px] h-full absolute  left-0 rounded-full bg-primary'>
				<Timer classContent='absolute top-[10px] right-0' time={10} />
			</span>
		</div>
	);
};

export default Bar;
