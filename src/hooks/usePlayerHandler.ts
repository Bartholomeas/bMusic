import { useReducer, RefObject } from 'react';
import { ACTIONS } from './actions';
import { songs, SongInterface } from '../songs';

export interface RefReducerPack {
	state: SongState;
	dispatch: React.Dispatch<any>;
	audioRef: RefObject<HTMLAudioElement>;
}
export interface SongState {
	songStatus: boolean;
	songIndex: number;
	id: number;
	volume: number;
	currentSong: SongInterface;
	duration: number;
	onLoop: boolean;
	isRandom: boolean;
	listOpen: boolean;
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
	duration: songs[0].duration,
	onLoop: false,
	isRandom: false,
	listOpen: false,
};

let randomNumber: number = 0;

function generateRandom(): number {
	return (randomNumber = Math.floor(Math.random() * songs.length));
}

function songStatusReducer(state: SongState, action: SongAction) {
	switch (action.type) {
		case ACTIONS.TOGGLE_SONG:
			if (action.payload) {
				return {
					...state,
					songStatus: true,
					songIndex: parseInt(action.payload),
					id: parseInt(action.payload),
					volume: 1,
					currentSong: songs[parseInt(action.payload)],
				};
			}
			return { ...state, songStatus: !state.songStatus };

		case ACTIONS.NEXT_SONG:
			if (state.isRandom) {
				do {
					generateRandom();
				} while (state.id === randomNumber);

				state.songIndex = randomNumber;
			}
			if (state.onLoop && !action.payload) {
				return {
					...state,
					id: songs[state.songIndex].id,
					volume: 1,
					currentSong: songs[state.songIndex],
					duration: songs[state.songIndex].duration,
				};
			}

			if (state.songIndex >= songs.length - 1) {
				return {
					...state,
					songIndex: 0,
					id: songs[0].id,
					volume: 1,
					duration: songs[0].duration,
					currentSong: songs[0],
				};
			} else {
				return {
					...state,
					songIndex: state.songIndex + 1,
					id: songs[state.songIndex + 1].id,
					volume: 1,
					currentSong: songs[state.songIndex + 1],
					duration: songs[state.songIndex + 1].duration,
				};
			}

		case ACTIONS.PREV_SONG:
			if (state.onLoop && !action.payload) {
				return {
					...state,
					id: songs[state.songIndex].id,
					volume: 1,
					currentSong: songs[state.songIndex],
					duration: songs[state.songIndex].duration,
				};
			}

			if (state.songIndex === 0) {
				return {
					...state,
					songIndex: songs.length - 1,
					id: songs[songs.length - 1].id,
					volume: 1,
					currentSong: songs[songs.length - 1],
					duration: songs[songs.length - 1].duration,
				};
			} else {
				return {
					...state,
					songIndex: state.songIndex - 1,
					id: songs[state.songIndex - 1].id,
					volume: 1,
					currentSong: songs[state.songIndex - 1],
					duration: songs[state.songIndex - 1].duration,
				};
			}
		case ACTIONS.LOOP_SONG:
			return { ...state, onLoop: !state.onLoop };

		case ACTIONS.RANDOM_SONG:
			return { ...state, isRandom: !state.isRandom };

		case ACTIONS.CHANGE_VOLUME:
			return { ...state, volume: action.payload };

		case ACTIONS.OPEN_LIST:
			return { ...state, listOpen: !state.listOpen };

		default:
			throw new Error('ERROR');
	}
}

export function usePlayerHandler() {
	const [state, dispatch] = useReducer(songStatusReducer, initialState);

	return { state, dispatch };
}
