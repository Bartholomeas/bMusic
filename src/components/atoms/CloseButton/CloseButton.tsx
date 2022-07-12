import React from 'react';

const CloseButton = ({ onClick }: { onClick: () => void }) => {
	return <button onClick={() => onClick()} className='bg-accentColor p-0.5 h-1 w-[20%] rounded'></button>;
};

export default CloseButton;
