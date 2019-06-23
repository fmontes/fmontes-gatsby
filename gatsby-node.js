const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const templates = {
    blog: `./src/templates/blog/blog-post.js`,
    portfolio: `./src/templates/portfolio/portfolio-item.js`,
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(
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
    ).then((result) => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

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
