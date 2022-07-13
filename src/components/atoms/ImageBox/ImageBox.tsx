import React from 'react';
import img from '../../../assets/images/kendrick.jpeg';

const ImageBox = ({ coverImg = img }: { coverImg: string }) => {
	return (
		<div className='relative flex justify-center items-center w-full h-full bg-slate-300 rounded overflow-hidden'>
			 <img className='absolute w-full h-full object-cover' src={coverImg} alt='Cover of current song'></img>
		</div>
	);
};

export default ImageBox;
