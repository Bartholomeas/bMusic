import React from 'react'

const Author = ({ author = '' }: { author: string }) => {
	return <p className='text-secondaryLight'>{author}</p>
}

export default Author
