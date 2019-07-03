import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import BlogItem from '../components/BlogItem'

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location}>
                <SEO title="Blog" />
                {posts.map(({ node }, i) => (
                    <BlogItem item={node} key={i} />
                ))}
            </Layout>
        )
    }
}

export default BlogIndex

export const blogQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
