import dieHardSong from './assets/mp3/diehard.mp3';
import dieHardCover from './assets/images/kendrick.jpeg';

interface Song {
	id: number;
	title: string;
	author: string;
	image: string;
	source: string;
}

export const songs: Song[] = [
	{
		id: 1,
		title: 'Die Hard',
		author: 'Kendrick Lamar',
		image: dieHardCover,
		source: dieHardSong,
	},
];
