import React from 'react';

const Author: React.FC<{ author: string }> = ({ author = '' }) => {
	return <h2 className='text-secondaryLight'>{author}</h2>;
};

export default Author;
