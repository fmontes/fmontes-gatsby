import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const BlogTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
`

const BlogItem = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
        <div key={node.fields.slug}>
            <BlogTitle>
                <Link to={node.fields.slug}>{title}</Link>
            </BlogTitle>
            <small>{node.frontmatter.date}</small>
            <p
                dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                }}
            />
        </div>
    )
}

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location}>
                <SEO title="Frontend Developer Javascript Blog" />
                {posts.map(({ node }) => (
                    <BlogItem node={node} />
                ))}
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
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
