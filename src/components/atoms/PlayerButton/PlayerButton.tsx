import { SongState } from '../../../hooks/usePlayerHandler';
import styles from './PlayerButton.module.css';

const PlayerButton: React.FC<{
	state?: SongState;
	BtnType: any;
	reducerFunction?: () => any;
	additionalFunction?: (e: any) => void;
	additionalClass?: string;
	isOpen?: boolean;
}> = ({ BtnType, state, reducerFunction, additionalFunction, additionalClass, isOpen = false }) => {
	return (
		<>
			<button onClick={reducerFunction} className={`p-1 transition-transform ease hover:scale-90 `}>
				<BtnType className={`fill-primaryDark h-3 w-[20px] ${additionalClass}`} />
			</button>

			{additionalClass === 'volume h-[20px]' ? (
				<input
					onChange={additionalFunction}
					type='range'
					min={0}
					max={100}
					className={`top-[50%] w-[80%] left-[0px] ${isOpen ? 'scale-x-[100%]' : 'scale-x-0'} ${
						styles.volumeInput
					} transition-transform origin-left w-full h-[5px]  bg-primary rounded cursor-pointer appearance-none`}
				/>
			) : null}
		</>
	);
};

export default PlayerButton;
