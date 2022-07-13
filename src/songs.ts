import dieHardSong from './assets/mp3/diehard.mp3';
import dieHardCover from './assets/images/kendrick.jpeg';
import hotlineBlingSong from './assets/mp3/hotlinebling.mp3';
import hotlineBlingCover from './assets/images/drake.jpeg';
import sexybackSong from './assets/mp3/sexyback.mp3';
import sexybackCover from './assets/images/timberlake.jpeg';
import ayotechnologySong from './assets/mp3/ayotechnology.mp3';
import fiftycentCover from './assets/images/50cent.jpeg';
import selfcontrolSong from './assets/mp3/selfcontrol.mp3';
import lauraCover from './assets/images/laura.jpeg';
import greeneyesSong from './assets/mp3/greeneyes.mp3';
import zenekCover from './assets/images/zenek.jpeg';

type SongSource = string | null;
export interface SongInterface {
	id: number;
	title: string;
	author: string;
	duration: number;
	image: string;
	source: SongSource;
}

export const songs: SongInterface[] = [
	{
		id: 0,
		title: 'Die Hard',
		author: 'Kendrick Lamar',
		duration: 239,
		image: dieHardCover,
		source: dieHardSong,
	},
	{
		id: 1,
		title: 'Hotline Bling',
		author: 'Drake',
		duration: 260,
		image: hotlineBlingCover,
		source: hotlineBlingSong,
	},
	{
		id: 2,
		title: 'SexyBack',
		author: 'Justin Timberlake & Timbaland',
		duration: 240,
		image: sexybackCover,
		source: sexybackSong,
	},
	{
		id: 3,
		title: 'Ayo Technology',
		author: '50Cent & Timbaland',
		duration: 275,
		image: fiftycentCover,
		source: ayotechnologySong,
	},
	{
		id: 4,
		title: 'Self Control',
		author: 'Laura Branigan',
		duration: 307,
		image: lauraCover,
		source: selfcontrolSong,
	},
	{
		id: 5,
		title: 'Przez twe oczy zielone',
		author: 'Zenek Martyniuk',
		duration: 218,
		image: zenekCover,
		source: greeneyesSong,
	},
];
