import { useEffect, useState } from 'react'
import { ACTIONS } from '../../../hooks/actions'
import { ReducerInterface } from '../../../hooks/usePlayer'
import ListPlayButton from '../../atoms/ListPlayButton/ListPlayButton'

type CardProps = ReducerInterface & {
	title: string
	author: string
	songId: number
}

const SongCard = ({ title, author, songId, dispatch, state, audioRef }: CardProps) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	function toggleSong() {
		dispatch({ type: ACTIONS.TOGGLE_SONG, payload: songId.toString() })

		setTimeout(() => {
			audioRef.current?.play()
			setIsPlaying(true)
		}, 50)

		if (songId === state.songIndex && state.songStatus && isPlaying) {
			setTimeout(() => {
				audioRef.current?.pause()
				dispatch({ type: ACTIONS.TOGGLE_SONG })
				setIsPlaying(false)
			}, 50)
		}
		return
	}

	useEffect(() => {
		if (state.songStatus && state.songIndex === songId) {
			setIsPlaying(true)
		}
	}, [state.songStatus, state.songIndex, songId])

	return (
		<div className='flex flex-row gap-2 h-5 p-[7px] w-full items-center justify-start rounded-full bg-primaryDark'>
			<ListPlayButton
				isPlaying={songId === state.songIndex && state.songStatus && isPlaying ? true : false}
				reducerFunction={() => toggleSong()}
			/>
			<div>
				<p className='font-bold text-sm text-accentColor '>{title}</p>
				<p className='text-xs text-accentColor'>{author}</p>
			</div>
		</div>
	)
}

export default SongCard
