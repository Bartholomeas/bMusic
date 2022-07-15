import { useState, useCallback } from 'react';
import { ACTIONS } from './actions';
import { RefReducerPack } from './usePlayer';

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
	switchSong: (arg0: SwitchMode) => void;
	// switchSong: (arg0: SwitchMode, arg1: boolean) => void;
}

export function useSongSwitcher({ audioRef, state, dispatch }: RefReducerPack): HookParameters {
	const [elapsedTime, setElapsedTime] = useState<number>(initialState);
	const [barProgress, setBarProgress] = useState<number>(0);

	const switchSong = useCallback(
		(mode: SwitchMode): void => {
			if (mode === SwitchMode.NEXT) {
				dispatch({ type: ACTIONS.NEXT_SONG });
			} else if (mode === SwitchMode.PREVIOUS) {
				dispatch({ type: ACTIONS.PREV_SONG });
			}
			if (state.songStatus) {
				setTimeout(() => {
					audioRef.current!.play();
					setElapsedTime(0);
				}, 100);
			}
		},
		[state.songStatus]
	);
	return { elapsedTime, setElapsedTime, barProgress, setBarProgress, switchSong };
}
