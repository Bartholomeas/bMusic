import Author from '../../atoms/Author/Author';
import Title from '../../atoms/Title/Title';
const InfoBox: React.FC<{ author: string; title: string }> = ({ author = '', title = '' }) => {
	return (
		<div className=' w-full h-auto text-center'>
			<Title title={title} />
			<Author author={author} />
		</div>
	);
};

export default InfoBox;
