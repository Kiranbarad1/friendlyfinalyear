import Head from "next/head";

const SEO = ({ title, description, keywords, image }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || "/default.jpg"} />
            <meta property="og:type" content="website" />
        </Head>
    );
};

export default SEO;
