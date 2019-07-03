import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import TechList from './components/TechList';
import Separator from '../../components/Separator'

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
                    <blockquote>{post.frontmatter.description}</blockquote>
                </div>

                <h3>Tech Stack</h3>
                <TechList tech={post.frontmatter.tech} />
                <Separator />
                <div class="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
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
