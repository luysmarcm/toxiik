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
			<SeoComponent
				title="TOXIIK"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/public/images/to.png"
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
