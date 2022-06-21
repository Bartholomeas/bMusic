import { SongState } from '../../../hooks/usePlayerHandler';

const PlayerButton: React.FC<{
	state?: SongState;
	btnType: string;
	reducerFunction?: () => any;
	additionalClass?: string;
}> = ({ btnType, state, reducerFunction, additionalClass }) => {
	return (
		<button onClick={reducerFunction} className={`p-1 transition-transform ease  hover:scale-90 `}>
			<img className={`${additionalClass} `} src={btnType} alt='Przycisk poprzedni utwór' />
		</button>
	);
};

export default PlayerButton;
