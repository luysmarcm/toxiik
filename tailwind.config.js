module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				//"banner": "url('/images/prueba7.jpg')",
				fondoT: "url('/images/Fondo7.jpg')",
				banner: "url('/images/banner.svg')",
				toxiik: "url('/images/toxiikW.svg')",
				monta: "url('/images/8.svg')",
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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
