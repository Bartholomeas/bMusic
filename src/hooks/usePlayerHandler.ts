import { useReducer } from 'react';
import { ACTIONS } from './actions';
import { songs } from '../songs';

interface SongState {
	songStatus: boolean;
}

interface SongAction {
	type: string;
	payload?: any;
}

const initialState: SongState = {
	songStatus: false,
};
function songStatusReducer(songState: SongState, action: SongAction) {
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			console.log(songs[0]);
			// console.log(songState);
			return { songStatus: !songState.songStatus };
		default:
			throw new Error('ERROR');
	}
}
export function usePlayerHandler() {
	const [songState, dispatch] = useReducer(songStatusReducer, initialState);

	return { songState, dispatch };
}
