import { useReducer, RefObject, useState } from 'react';
import { ACTIONS } from './actions';
import { songs, SongInterface } from '../songs';

export interface RefReducerPack {
	state: SongState;
	dispatch: React.Dispatch<any>;
	audioRef: RefObject<HTMLAudioElement>;
}
export interface SongState {
	songStatus: boolean;
	id: number;
	volume: number;
	currentSong: SongInterface;
	// durationTime: number;
	// elapsedTime: number;
}
interface SongAction {
	type: string;
	payload?: any;
}

const initialState: SongState = {
	songStatus: false,
	id: songs[0].id,
	volume: 50,
	currentSong: songs[0],
	// durationTime: songs[0],
};

// console.log(songs.length);
let songIndex: number = 0;
function songStatusReducer(state: SongState, action: SongAction) {
	console.log('state', state);
	console.log('action', action);
	console.log(songIndex);
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			return { ...state, songStatus: !state.songStatus };

		case ACTIONS.NEXT_SONG:
			// if (songIndex >= songs.length) {
			// 	songIndex = 0;
			// } else {
			// 	songIndex++;
			// }
			songIndex++;
			// console.log(state.currentSong);
			return { ...state, volume: 40 };
		// return { ...state, currentSong: songs[songIndex] };

		default:
			throw new Error('ERROR');
	}
}

export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
