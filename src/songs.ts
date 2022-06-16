import dieHardSong from './assets/mp3/diehard.mp3';
import dieHardCover from './assets/images/kendrick.jpeg';
import hotlineBlingSong from './assets/mp3/hotlinebling.mp3';
import hotlineBlingCover from './assets/images/drake.jpeg';

export interface SongInterface {
	id: number;
	title: string;
	author: string;
	image: string;
	source: string;
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
];
