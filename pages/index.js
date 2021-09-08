import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Products from "../components/Products";
import ToxiikUni from "../components/ToxiikUni";




export default function Home() {
	// const navigation = [
	// 	{ name: "HOME", href: "#home" , current: true },
	// 	{ name: "ABOUT US", href: "#about", current: false },
	// 	{ name: "PRODUCTS", href: "#products", current: false },
	// ];
	return (
		<div>
			<Head>
				<title>Toxiik</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<AboutUs />
			<Products/>
			<ToxiikUni />
			<Footer />
		</div>
	);
}
