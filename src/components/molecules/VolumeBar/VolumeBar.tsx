import React from 'react';
import Bar from '../../atoms/Bar/Bar';

const VolumeBar = () => {
	return (
		<div className='relative flex h-full w-[10%]'>
			<Bar isVolume={true} />
		</div>
	);
};

export default VolumeBar;
