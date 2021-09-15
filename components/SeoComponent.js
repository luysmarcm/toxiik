import Head from "next/head";

const SeoComponent = ({ title, description, image }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content={title} />
		<meta
			name="og:description"
			property="og:description"
			content={description}
		/>
		<meta property="og:site_name" content={title} />
		<meta
			property="og:image"
			content="https://toxiik.vercel.app/images/to.png"
		/>
		<meta property="og:image:width" content="684" />
		<meta property="og:image:height" content="328" />
	</Head>
);
export default SeoComponent;