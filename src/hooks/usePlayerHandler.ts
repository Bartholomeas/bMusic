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
let songIndex: number = 0;

const initialState: SongState = {
	songStatus: false,
	id: songs[songIndex].id,
	volume: 50,
	currentSong: songs[songIndex],
	// durationTime: songs[0],
};
// for (let i = 0; i < songs.length; i++) {
// 	console.log(songs[i]);
// }
// console.log(songs.length);
function songStatusReducer(state: SongState, action: SongAction) {
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			return { ...state, songStatus: !state.songStatus };

		case ACTIONS.NEXT_SONG:
			// console.log(songIndex);
			if (songIndex >= songs.length) {
				songIndex = 0;
			} else {
				songIndex++;
			}
			console.log(songIndex);
			return { ...state, songStatus: !state.songStatus };

		// return { ...state, id: songs[songIndex].id, currentSong: songs[songIndex] };

		default:
			throw new Error('ERROR');
	}
}
export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
