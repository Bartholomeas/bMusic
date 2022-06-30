import dieHardSong from './assets/mp3/diehard.mp3';
import dieHardCover from './assets/images/kendrick.jpeg';
import hotlineBlingSong from './assets/mp3/hotlinebling.mp3';
import hotlineBlingCover from './assets/images/drake.jpeg';
import sexybackSong from './assets/mp3/sexyback.mp3';
import sexybackCover from './assets/images/timberlake.jpeg';

type SongSource = string | null;
export interface SongInterface {
	id: number;
	title: string;
	author: string;
	image: string;
	source: SongSource;
}

export const songs: SongInterface[] = [
	{
		id: 0,
		title: 'Die Hard',
		author: 'Kendrick Lamar',
		image: dieHardCover,
		source: dieHardSong,
	},
	{
		id: 1,
		title: 'Hotline Bling',
		author: 'Drake',
		image: hotlineBlingCover,
		source: hotlineBlingSong,
	},
	{
		id: 2,
		title: 'SexyBack',
		author: 'Justin Timberlake & Timbaland',
		image: sexybackCover,
		source: sexybackSong,
	},
];
