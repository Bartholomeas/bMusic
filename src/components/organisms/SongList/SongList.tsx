import { RefReducerPack } from '../../../hooks/usePlayerHandler';
import SongCard from '../../molecules/SongCard/SongCard';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import CardWrapper from '../../molecules/CardWrapper/CardWrapper';
import { songs } from '../../../songs';
import { ACTIONS } from '../../../hooks/actions';

const SongList = ({ state, dispatch, audioRef }: RefReducerPack) => {
	function toggleList(): void {
		dispatch({ type: ACTIONS.OPEN_LIST });
	}

	return (
		<div
			className={`absolute list-wrapper flex flex-col justify-start items-center gap-3 left-0 bottom-[-10px]  w-full h-full p-1 bg-primary z-40 rounded-t-md transition-transform ease-out duration-300 ${
				state.listOpen ? 'translate-y-0' : 'translate-y-full'
			}`}>
			<CloseButton onClick={toggleList} />

			<CardWrapper>
				{songs.map(song => (
					<SongCard
						title={song.title}
						author={song.author}
						state={state}
						dispatch={dispatch}
						audioRef={audioRef}
						songId={song.id}
						key={`${song.id}'-song`}
					/>
				))}
			</CardWrapper>
		</div>
	);
};

export default SongList;
