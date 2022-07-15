import { useState, useCallback } from 'react';
import { ACTIONS } from './actions';
import { ReducerInterface } from './usePlayer';

const initialState: number = 0;

export enum SwitchMode {
	NEXT,
	PREVIOUS,
}

interface HookParameters {
	elapsedTime: number;
	setElapsedTime: (arg0: number) => void;
	barProgress: number;
	setBarProgress: (arg0: number) => void;
	switchSong: (arg0: SwitchMode, arg1?: boolean) => void;
}

export function useSongSwitcher({ audioRef, state, dispatch }: ReducerInterface): HookParameters {
	const [elapsedTime, setElapsedTime] = useState<number>(initialState);
	const [barProgress, setBarProgress] = useState<number>(0);

	const switchSong = useCallback(
		(mode: SwitchMode, payload: boolean = false): void => {
			if (mode === SwitchMode.NEXT) {
				if (payload) dispatch({ type: ACTIONS.NEXT_SONG, payload: payload });

				dispatch({ type: ACTIONS.NEXT_SONG });
			} else if (mode === SwitchMode.PREVIOUS) {
				if (payload) dispatch({ type: ACTIONS.NEXT_SONG, payload: payload });
				dispatch({ type: ACTIONS.PREV_SONG });
			}
			if (state.songStatus) {
				setTimeout(() => {
					audioRef.current!.play();
				}, 100);
			}
			setElapsedTime(0);
			setBarProgress(0);
		},
		[state.songStatus]
	);
	return { elapsedTime, setElapsedTime, barProgress, setBarProgress, switchSong };
}
