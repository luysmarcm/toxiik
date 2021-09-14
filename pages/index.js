import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import ToxiikUni from "../components/ToxiikUni";
import SeoComponent from "../components/SeoComponent";




export default function Home() {
	const navigation = [
		{ name: "HOME", href: "#home" , current: false },
		{ name: "ABOUT US", href: "#about", current: false },
		{ name: "PRODUCTS", href: "#products", current: false },
	];
	return (
		<div>
			{/* <Head>
				<title>Toxiik</title>
				
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<SeoComponent
				title="Toxiik"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/images/imagen.png"
			/>
			<header>
				<NavBar navigation={navigation} />
				<Header />
			</header>
			<main>
				<AboutUs />
				<Products />
				<ToxiikUni />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
