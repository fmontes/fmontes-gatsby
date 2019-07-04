import React from 'react'
import { graphql } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import TechList from './components/TechList'
import Separator from '../../components/Separator'

const { fontSize, lineHeight } = scale(1 / 2)

const Date = styled.p`
    display: block;
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin-bottom: ${rhythm(1)};
    margin-top: ${rhythm(-1)};
`

class PortfolioItemTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <Date>{post.frontmatter.date}</Date>
                </header>
                <blockquote>{post.frontmatter.description}</blockquote>

                <h3>Tech Stack</h3>
                <TechList tech={post.frontmatter.tech} />
                <Separator />
                <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
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
                date(formatString: "MMMM YYYY")
            }
        }
    }
`
