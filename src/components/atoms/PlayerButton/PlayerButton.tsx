const PlayerButton: React.FC<{ btnType: string; additionalClass?: string }> = ({ btnType, additionalClass }) => {
	return (
		<button className={`p-1 transition-transform ease  hover:scale-90 `}>
			<img className={`${additionalClass} `} src={btnType} alt='Przycisk poprzedni utwór' />
		</button>
	);
};

export default PlayerButton;
