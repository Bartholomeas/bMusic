import { useState } from 'react';
import { ACTIONS } from '../../../hooks/actions';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import { ReducerInterface } from '../../../hooks/usePlayer';
import { FaVolumeUp, FaListUl } from 'react-icons/fa';

const OptionsPanel = ({ state, dispatch, audioRef }: ReducerInterface) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleVolume() {
		setIsOpen(!isOpen);
	}
	function handleVolume(e: any) {
		if (audioRef.current) audioRef.current!.volume = e.target.value / 100;
		dispatch({ type: ACTIONS.CHANGE_VOLUME, payload: e.target.value / 100 });
	}

	function toggleList(): void {
		dispatch({ type: ACTIONS.OPEN_LIST });
	}

	return (
		<div className=' flex justify-between items-center w-[100%] h-3 '>
			<PlayerButton
				additionalClass='volume'
				BtnType={FaVolumeUp}
				reducerFunction={() => toggleVolume()}
				additionalFunction={e => handleVolume(e)}
				isOpen={isOpen}
			/>
			<PlayerButton BtnType={FaListUl} reducerFunction={() => toggleList()} />
		</div>
	);
};

export default OptionsPanel;
