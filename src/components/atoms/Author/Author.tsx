import React from 'react';

const Author: React.FC<{ author: string }> = ({ author = '' }) => {
	return <p className='text-secondaryLight'>{author}</p>;
};

export default Author;
