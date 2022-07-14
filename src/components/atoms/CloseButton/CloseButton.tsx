import React from 'react';

const CloseButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<button onClick={() => onClick()} className=' t-0 bg-accentColor p-0.5 pb-1 h-[10px] w-[80px] rounded'></button>
	);
};

export default CloseButton;
