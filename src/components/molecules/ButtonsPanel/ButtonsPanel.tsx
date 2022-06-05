import React, { useReducer } from 'react';
import { ACTIONS } from '../../../hooks/actions';
import PlayButton from '../../atoms/PlayButton/PlayButton';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';
import prev from '../../../assets/prevButton.svg';
import next from '../../../assets/nextButton.svg';
import loop from '../../../assets/loopButton.svg';
import random from '../../../assets/randomButton.svg';
import list from '../../../assets/listButton.svg';
import volume from '../../../assets/volumeButton.svg';

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'increment':
// 			return { count: state.count + 1 };
// 		case 'decrement':
// 			return { count: state.count - 1 };
// 		default:
// 			console.log('error');
// 			return;
// 	}
// }
// const [state, dispatch] = useReducer(reducer, initialState);
// const initialState: any = { count: 0 };

// <button
// onClick={() => {
// 	dispatch({ type: 'decrement' });
// }}>
// Minus
// </button>
// <button
// onClick={() => {
// 	dispatch({ type: 'increment' });
// }}>
// Plus
// </button>

interface SongState {
	songStatus: boolean;
}

const initialState: SongState = {
	songStatus: false,
};

const ButtonsPanel: React.FC = () => {
	const [songState, dispatch] = useReducer(songStatusReducer, initialState);

	function songStatusReducer(songState: SongState, action) {
		switch (action.type) {
			case ACTIONS.TOGGLE_SONG:
				console.log(songState);
				return { songStatus: !songState.songStatus };
			default:
				throw new Error('ERROR');
		}
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			{/* <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_SONG })}>Kliknij 111</button>
			<button onClick={() => console.log(songState)}>Kliknij</button> */}
			<div className='flex justify-between'>
				<PlayerButton additionalClass='h-[20px]' btnType={volume} />
				<PlayerButton additionalClass='h-[20px]' btnType={list} />
			</div>
			<div className='flex justify-between gap-1 items-center w-full'>
				<PlayerButton additionalClass='h-[20px]' btnType={random} />
				<PlayerButton btnType={prev} />
				<PlayButton toggleSongStatus={() => dispatch({ type: ACTIONS.TOGGLE_SONG })} />
				<PlayerButton btnType={next} />
				<PlayerButton additionalClass='h-[20px]' btnType={loop} />
			</div>
		</div>
	);
};

export default ButtonsPanel;
