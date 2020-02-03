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
            resolve: `gatsby-source-wordpress`,
            options: {
                /*
                 * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
                 * Example : 'demo.wp-api.org' or 'www.example-site.com'
                 */
                baseUrl: `gsi.eravilleconceptweb.com`,
                // The protocol. This can be http or https.
                protocol: `https`,
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
                // This feature is untested for sites hosted on WordPress.com
                useACF: true,
                verboseOutput: false,
                excludedRoutes: [
                    '/wp/v2/users/me',
                    '/acf/v2/options',
                    '/wp/v2/settings',
                    '/wp/v2/themes',
                    '/acf/v3/comments',
                ],
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
        `gatsby-plugin-sitemap`,
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
