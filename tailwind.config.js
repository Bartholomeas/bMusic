module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '520px',
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
			xs: '11px',
			sm: '16px',
			md: '20px',
			lg: '24px',
			xl: '30px',
		},
		extend: {
			colors: {
				backgroundPrimary: '#DFF5F2',
				backgroundSecond: '#FCFCFD',
				coreGrey: '#677371',
				lightGrey: '#D9DDDC',
				primary: '#7BCBBD',
				primaryDark: '#6CC0B1',
				accentColor: '#4A1F46',
				secondaryDark: '#13211F',
				secondaryLight: '#586967',
			},
			dropShadow: {
				standardShadow: '-10px 10px 25px #C7CDCC',
			},

			borderRadius: {
				DEFAULT: '16px',
			},
		},
	},

	plugins: [],
};
