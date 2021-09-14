import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en-En">
				<Head>
					<title>Toxiik</title>
					<meta name="description" content=" " />
					<meta name="theme-color" content="#00000" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="apple-touch-icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
