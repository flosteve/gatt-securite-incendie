/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const {
    createRemoteFileNode,
    createFilePath,
} = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
}) => {
    const { createNode } = actions;
    createResolvers({
        WPGraphQL_MediaItem: {
            imageFile: {
                type: `File`,
                resolve(source, args, context, info) {
                    return createRemoteFileNode({
                        url: source.sourceUrl,
                        store,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                    });
                },
            },
        },
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const formationPost = path.resolve(
        `./src/templates/Formation/single-formation.js`
    );
    const result = await graphql(
        `
            {
                allWordpressWpFormation(sort: { fields: title, order: ASC }) {
                    edges {
                        node {
                            title
                            slug
                            wordpress_id
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allWordpressWpFormation.edges;

    posts.forEach((post, index) => {
        // const previous = index === posts.length - 1 ? null : posts[index + 1].node
        // const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: `/formation/` + post.node.slug,
            component: formationPost,
            context: {
                id: post.node.wordpress_id,
                // previous,
                // next,
            },
        });
    });
};
