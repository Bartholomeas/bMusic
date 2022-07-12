const Title: React.FC<{ title: string }> = ({ title = '' }) => {
	return <p className='text-secondaryDark font-bold text-xl'>{title}</p>;
};

export default Title;
