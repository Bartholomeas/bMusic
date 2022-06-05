import React from 'react';
import Author from '../../atoms/Author/Author';
import Title from '../../atoms/Title/Title';

const InfoBox = () => {
	return (
		<div className=' w-full h-auto text-center          '>
			<Title />
			<Author />
		</div>
	);
};

export default InfoBox;
