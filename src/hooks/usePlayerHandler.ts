import { useReducer } from 'react';

interface SongState {
	songStatus: boolean;
}

const initialState: SongState = {
	songStatus: false,
};

function usePlayerHandler() {
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
}
