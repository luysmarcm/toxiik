module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "320px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		// screens: {
		// 	xs: "320px",
		// 	phoneLg: "411px",
		// 	sm: "640px",
		// 	md: "768px",
		// 	lg: "1024px",
		// 	ll: "1322px",
		// 	lx: "1028px",
		// 	xl: "2560px",
		// },
		// maxWidth: (theme, { breakpoints }) => ({
		// 	none: "none",
		// 	xs: "20rem",
		// 	sm: "24rem",
		// 	md: "28rem",
		// 	lg: "32rem",
		// 	xl: "36rem",
		// 	"2xl": "42rem",
		// 	"3xl": "48rem",
		// 	"4xl": "56rem",
		// 	"5xl": "64rem",
		// 	"6xl": "72rem",
		// 	full: "100%",
		// 	...breakpoints(theme("screens")),
		// }),
		// minHeight: {
		// 	0: "0",
		// 	full: "100%",
		// 	screen: "100vh",
		// },
		// minWidth: {
		// 	0: "0",
		// 	full: "100%",
		// },

		extend: {
			backgroundImage: (theme) => ({
				//"banner": "url('/images/prueba7.jpg')",
				fondoT: "url('/images/Fondo7.jpg')",
				banner: "url('/images/banner.jpg')",
				toxiik: "url('/images/toxiikW.svg')",
				monta: "url('/images/8.svg')",
				letra: "url('/images/CHARGE.svg')",
				//"footer-texture": "url('/img/footer-texture.png')",
			}),
			colors: {
				primary: "#EF4D30",
			},
			fontFamily: {
				mont: ["Montserrat"],
			},
			fontSize: {
				sm: ["14px", "20px"],
				base: ["18px", "24px"],
				lg: ["20px", "28px"],
				xl: ["24px", "32px"],
				xxl: ["28px", "38px"],
			},
			// animation: {
			// 	fadeIn: "fadeIn 2s ease-in forwards",
			// },
			// keyframes: {
			// 	fadeIn: {
			// 		"0%": { opacity: 0 },
			// 		"100%": { opacity: 1 },
			// 	},
			// },
			// variants: {
			// 	animation: ["motion-safe"],
			// },
		},
	},
	// variants: {
	// 	extend: {},
	// },
	//plugins: [require("@tailwindcss/aspect-ratio")],
};
