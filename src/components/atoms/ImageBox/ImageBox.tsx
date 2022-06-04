import React from 'react';
import img from '../../../assets/kendrick.jpeg';

const ImageBox: React.FC = () => {
	return (
		<div className='relative flex justify-center items-center overflow-hidden w-full h-[50%] self-end  bg-slate-300 rounded '>
			 <img className='w-full h-full object-cover' src={img} alt='Okladka plyty obecnej piosenki'></img>
		</div>
	);
};

export default ImageBox;
