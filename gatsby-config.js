require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        lang: `fr`,
        title: `Gatt Sécurité Incendie`,
        description: `Vente, formation et conception de plan sécurité`,
        keywords: `sécurité, incendie, formation, plan`,
        author: `flostevebron91`,
        siteUrl: `https://www.gattsecuriteincendie.com/`,
        twitterUsername: `flostevebron91`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/img`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'WPGraphQL',
                fieldName: 'wpgraphql',
                url: `https://gsi.eravilleconceptweb.com/graphql`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Gatt Sécurité Incendie',
                short_name: 'GSI',
                start_url: '/',
                background_color: '#c8292e',
                theme_color: '#c8292e',
                display: 'minimal-ui',
                icon: 'src/assets/img/logo_gsi.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-theme-material-ui`,
            options: {
                webFontsConfig: {
                    fonts: {
                        google: [
                            {
                                family: `Poppins`,
                                variants: [`300`, `400`, `500`, '600', '700'],
                            },
                            {
                                family: `Open Sans`,
                                variants: [`300`, `400`, `500`, '600', '700'],
                            },
                        ],
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-performance-metrics`,
            options: {
                firstPaint: true,
                firstContentfulPaint: true,
                firstInputDelay: true,
                useLogging: true,
                useGoogleAnalytics: true,
            },
        },
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-netlify`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
};
