import { SongState } from '../../../hooks/usePlayerHandler';

const PlayerButton: React.FC<{
	state?: SongState;
	btnType: string;
	reducerFunction?: () => any;
	volumeFunction?: (e: any) => void;
	additionalClass?: string;
	isOpen?: boolean;
}> = ({ btnType, state, reducerFunction, volumeFunction, additionalClass, isOpen = false }) => {
	return (
		<>
			<button onClick={reducerFunction} className={`p-1 transition-transform ease  hover:scale-90 `}>
				<img className={`${additionalClass} relative`} src={btnType} alt='Przycisk poprzedni utwór' />
			</button>
			{additionalClass === 'volume h-[20px]' ? (
				<input
					onChange={volumeFunction}
					type='range'
					min={0}
					max={100}
					className={`top-[50%] w-[80%] left-[0px] ${
						isOpen ? 'scale-x-[100%]' : 'scale-x-0'
					} transition-transform origin-left`}
				/>
			) : null}
		</>
	);
};

export default PlayerButton;
