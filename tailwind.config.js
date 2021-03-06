module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "280px",
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

		extend: {
			backgroundImage: (theme) => ({
				//"banner": "url('/images/prueba7.jpg')",
				fondoT: "url('/images/Fondo7.jpg')",
				banner: "url('/images/banner.jpg')",
				toxiik: "url('/images/toxiikW.svg')",
				monta: "url('/images/monta.webp)",
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
