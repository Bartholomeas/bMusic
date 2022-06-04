module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '440px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			padding: '2rem',
		},

		spacing: { 0: '0', 1: '0.8rem', 2: '1.6rem', 3: '2.4rem', 4: '3rem' },
		// borderRadius: {
		// 	DEFAULT: '16px',
		// },
		fontSize: {
			xs: '0.8rem',
			s: '1.6rem',
			m: '2rem',
			l: '2.4rem',
		},
		extend: {
			colors: {
				backgroundPrimary: '#F0F2F7',
				backgroundSecond: '#FCFCFD',
				primary: '#AE0F95',
				primaryDark: '#4A1F46',
				primaryPastel: '#E0C4DC',
				primaryOff: '#A38DA1',
			},
			dropShadow: {
				standardShadow: '-10px 10px 40px #E6DDE5',
			},

			borderRadius: {
				DEFAULT: '16px',
			},
		},
	},

	plugins: [],
};
