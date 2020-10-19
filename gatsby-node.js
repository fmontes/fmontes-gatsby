const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const templates = {
    blog: `./src/templates/blog/blog-post.js`,
    portfolio: `./src/templates/portfolio/portfolio-item.js`,
    instagram: `./src/templates/instagram/instagram-post.js`,
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const instagram = graphql(`
        {
            allInstagram {
                edges {
                    node {
                        taken_at_timestamp
                        shortcode
                        caption
                        title
                        slug
                        display_resources {
                            src
                            config_width
                            config_height
                        }
                        edge_media_preview_like {
                            count
                        }
                    }
                }
            }
        }
    `)

    const posts = graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `
    )

    return Promise.all([posts, instagram]).then(([result, photos]) => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges
        const igs = photos.data.allInstagram.edges

        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node
            const [section] = post.node.fields.slug.split('/').filter((item) => !!item)

            createPage({
                path: post.node.fields.slug,
                component: path.resolve(templates[section]),
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })

        // Create instagram posts pages.
        igs.forEach((post) => {
            const slug = `instagram/${post.node.slug}`

            createPage({
                path: slug,
                component: path.resolve(templates['instagram']),
                context: {
                    shortcode: post.node.shortcode,
                },
            })
        })

        return null
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
