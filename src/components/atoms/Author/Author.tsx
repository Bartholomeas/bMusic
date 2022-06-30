import React from 'react';

const Author: React.FC<{ author: string }> = ({ author = '' }) => {
	return <h2 className='text-primaryOff'>{author}</h2>;
};

export default Author;
