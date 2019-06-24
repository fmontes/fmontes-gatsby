import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import TechList from './components/TechList';

class PortfolioItemTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark

        return (
            <Layout location={this.props.location}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <div className="heading">
                    <h1>{post.frontmatter.title}</h1>
                    <h2>{post.frontmatter.description}</h2>
                </div>
                <TechList tech={post.frontmatter.tech} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        )
    }
}

export default PortfolioItemTemplate

export const pageQuery = graphql`
    query PortfolioItemBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                description
                tech
            }
        }
    }
`
