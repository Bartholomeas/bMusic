const Timer = ({ time = 0, classContent = '' }: { time: number; classContent: string }) => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60)

	return <p className={classContent}> {`0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
}
export default Timer
