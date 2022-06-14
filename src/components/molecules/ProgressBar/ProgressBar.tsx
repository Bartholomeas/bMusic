// import Bar from '../../atoms/Bar/Bar';
import Timer from '../../atoms/Timer/Timer';
import { usePlayerHandler } from '../../../hooks/usePlayerHandler';

const ProgressBar = () => {
	const { state, dispatch } = usePlayerHandler();
	console.log(state);

	return (
		<div className='flex flex-col h-[3rem] w-full'>
			<Timer classContent='self-end' time={122} />
			<div className=" 'w-full h-[10px] relative bar rounded-full bg-primaryPastel" aria-label='Progress bar of song'>
				<span className='w-[200px] h-full absolute  left-0 rounded-full bg-primary'>
					<Timer classContent='absolute top-[10px] right-0' time={10} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
