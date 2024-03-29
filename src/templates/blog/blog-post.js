import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../../utils/typography'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import Separator from '../../components/Separator'
import DateStyled from '../../styles/Date.styles'



const PaginationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 0 ${rhythm(1)};
        flex: 1;
    }
`

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext


        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                    canonical_url={post.frontmatter.canonical_url}
                />
                <h1>{post.frontmatter.title}</h1>
                <DateStyled>{post.frontmatter.date}</DateStyled>
                <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
                <Separator />

                <PaginationList>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </PaginationList>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
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
                date(formatString: "MMMM DD, YYYY")
                description
                canonical_url
            }
        }
    }
`
