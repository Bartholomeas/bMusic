import React from 'react';

const CardWrapper = ({ children }: { children: any }) => {
	return <div className='flex flex-col gap-1 w-full'>{children}</div>;
};

export default CardWrapper;
