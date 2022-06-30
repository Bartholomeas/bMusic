import Author from '../../atoms/Author/Author';
import Title from '../../atoms/Title/Title';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';
const InfoBox = () => {
	const { state, dispatch } = usePlayerHandler();
	console.log(state);
	return (
		<div className=' w-full h-auto text-center'>
			<Title />
			<Author />
		</div>
	);
};

export default InfoBox;
