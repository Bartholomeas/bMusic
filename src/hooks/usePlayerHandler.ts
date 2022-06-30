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
	songIndex: number;
	// durationTime: number;
	// elapsedTime: number;
}
interface SongAction {
	type: string;
	payload?: any;
}

const initialState: SongState = {
	songStatus: false,
	songIndex: 0,
	id: songs[0].id,
	volume: 50,
	currentSong: songs[0],
	// durationTime: songs[0],
};

function songStatusReducer(state: SongState, action: SongAction) {
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			return { ...state, songStatus: !state.songStatus };

		case ACTIONS.NEXT_SONG:
			if (state.songIndex >= songs.length - 1) {
				console.log(songs[state.songIndex + 1]);
				return {
					...state,
					songStatus: false,
					songIndex: 0,
					id: songs[0].id,
					volume: 50,
					currentSong: songs[state.songIndex + 1],
				};
			} else {
				console.log(state);
				return {
					...state,
					songStatus: false,
					songIndex: 0,
					id: songs[state.songIndex + 1].id,
					volume: 50,
					currentSong: songs[state.songIndex + 1],
				};
			}

		default:
			throw new Error('ERROR');
	}
}

export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
