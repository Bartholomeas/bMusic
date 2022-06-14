import { useReducer } from 'react';
import { ACTIONS } from './actions';
import { songs, SongInterface } from '../songs';

interface SongState {
	songStatus: boolean;
	index: number;
	volume: number;
	// durationTime: number;
	elapsedTime: number;
	currentSong: SongInterface;
}
interface SongAction {
	type: string;
	payload?: any;
}

// let currentSong: any;
// currentSong = new Audio(songs[0].source);
const initialState: SongState = {
	songStatus: false,
	index: 0,
	volume: 50,
	currentSong: songs[0],
	// durationTime: ,
	elapsedTime: 0,
};

function songStatusReducer(state: SongState, action: SongAction) {
	function updateTime() {
		// console.log(state);
		return { ...state, elapsedTime: (state.elapsedTime += 1) };
	}
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			if (!state.songStatus) {
				setInterval(updateTime, 1000);
				// state.currentSong.play();
				// console.log(currentSong.duration);
			} else {
				console.log('gra se tera');
				// currentSong.pause();
			}

			return { ...state, songStatus: !state.songStatus };
		default:
			throw new Error('ERROR');
	}
}
export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
