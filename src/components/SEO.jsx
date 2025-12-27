import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title} | Bean Buzz Coffee Shop</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Bean Buzz',
    description: 'Experience the perfect blend of tradition and taste at Bean Buzz Coffee Shop. Freshly brewed coffee, artisanal pastries, and a cozy atmosphere.',
    keywords: 'coffee shop, espresso, latte, artisanal coffee, bean buzz, cafe, breakfast, pastries',
};

export default SEO;
