/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, title, keywords, twitterUsername }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        lang
                        twitterUsername
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const titlePage = title || site.siteMetadata.title;
    const keyWordsArray = keywords || site.siteMetadata.keywords;
    const twitterUser = twitterUsername || site.siteMetadata.twitterUsername;
    const urlSite = `${site.siteMetadata.siteUrl}${'/'}`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={titlePage}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: keyWordsArray,
                },
                {
                    property: `og:title`,
                    content: titlePage,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:locale`,
                    content: `fr`,
                },
                {
                    property: `og:url`,
                    content: urlSite,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: twitterUser,
                },
                {
                    name: `twitter:title`,
                    content: titlePage,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `docsearch:version`,
                    content: `2.0`,
                },
                {
                    name: `viewport`,
                    content: `width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover`,
                },
            ].concat(meta)}
        />
    );
}

Seo.defaultProps = {
    lang: `fr`,
    meta: [],
    keywords: '',
    description: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
};

export default Seo;
