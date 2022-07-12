import React from 'react';
import img from '../../../assets/images/kendrick.jpeg';

const ImageBox = ({ coverImg = img }: { coverImg: string }) => {
	return (
		<div className='relative flex justify-center items-center overflow-hidden w-full h-full bg-slate-300 rounded '>
			 <img className='w-full h-auto object-cover' src={coverImg} alt='Okladka plyty obecnej piosenki'></img>
		</div>
	);
};

export default ImageBox;
