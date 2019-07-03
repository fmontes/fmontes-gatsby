import React from 'react'
import { Link, graphql } from 'gatsby'

import { rhythm } from '../../utils/typography'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const PortfolioTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
`

class PortfolioIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = `${this.props.data.site.siteMetadata.author} ${this.props.data.site.siteMetadata.title}`
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="Portfolio" />
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <article key={node.fields.slug}>
                            <PortfolioTitle>
                                <Link to={node.fields.slug}>{title}</Link>
                            </PortfolioTitle>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </article>
                    )
                })}
            </Layout>
        )
    }
}

export default PortfolioIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "/portfolio/.*.md$/" } }
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
