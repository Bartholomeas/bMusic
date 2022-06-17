// import Bar from '../../atoms/Bar/Bar';
import Timer from '../../atoms/Timer/Timer';

const ProgressBar: React.FC<{ audioDuration?: number; elapsedTime?: number }> = ({
	audioDuration = 0,
	elapsedTime = 0,
}) => {
	// console.log(typeof elapsedTime);

	return (
		<div className='flex flex-col h-[3rem] w-full'>
			<Timer classContent='self-end' time={Math.floor(audioDuration)} />
			<div className='w-full h-[10px] relative bar rounded-full bg-primaryPastel' aria-label='Progress bar of song'>
				<span className='w-[25%] h-full absolute  left-0 rounded-full bg-primary'>
					<Timer classContent='absolute top-[10px] right-0' time={Math.floor(elapsedTime)} />
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
