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
	onLoop: boolean;
	isRandom: boolean;
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
	volume: 1,
	currentSong: songs[0],
	onLoop: false,
	isRandom: false,
	// durationTime: songs[0],
};

function songStatusReducer(state: SongState, action: SongAction) {
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			return { ...state, songStatus: !state.songStatus };

		case ACTIONS.NEXT_SONG:
			if (state.songIndex >= songs.length - 1) {
				return {
					...state,
					songStatus: true,
					songIndex: 0,
					id: songs[0].id,
					volume: 1,
					currentSong: songs[0],
				};
			} else {
				return {
					...state,
					songStatus: true,
					songIndex: state.songIndex + 1,
					id: songs[state.songIndex + 1].id,
					volume: 1,
					currentSong: songs[state.songIndex + 1],
				};
			}

		case ACTIONS.PREV_SONG:
			if (state.songIndex === 0) {
				return {
					...state,
					songStatus: true,
					songIndex: songs.length - 1,
					id: songs[songs.length - 1].id,
					volume: 1,
					currentSong: songs[songs.length - 1],
				};
			} else {
				return {
					...state,
					songStatus: true,
					songIndex: state.songIndex - 1,
					id: songs[state.songIndex - 1].id,
					volume: 1,
					currentSong: songs[state.songIndex - 1],
				};
			}
		case ACTIONS.LOOP_SONG:
			return { ...state, onLoop: !state.onLoop };

		case ACTIONS.CHANGE_VOLUME:
			return { ...state, volume: action.payload };

		default:
			throw new Error('ERROR');
	}
}

export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
