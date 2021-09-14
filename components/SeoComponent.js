import Head from "next/head";

const SeoComponent = ({title, description, image}) => (
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
        <meta property="og:site_name" content="Toxiik" />
        {image ? (
            <meta property="og:image" content={`${image}`} />
        ) : (
            <meta
                property="og:image"
                content="https://www.propernoun.co/static/images/proper-noun-social.png"
            />
        )}
    </Head>
);
export default SeoComponent;