const Title: React.FC<{ title: string }> = ({ title = '' }) => {
	return <h1 className='text-primaryDark font-bold text-xl'>{title}</h1>;
};

export default Title;