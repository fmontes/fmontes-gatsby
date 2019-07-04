import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../../utils/typography'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import PageTitle from '../../components/PageTitle'

const PortfolioTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
    margin-top: 0;
`

const PortfolioItemStyled = styled.article`
    align-items: center;
    display: grid;
    grid-gap: ${rhythm(1)};
    grid-template-columns: repeat(auto-fit, minmax(${rhythm(11)}, 1fr));
`

const ImageWrapperLink = styled(Link)`
    box-shadow: none;
    width: 100%;

    &:hover,
    &:active {
        box-shadow: none;
    }

    img {
        margin-bottom: 0;
    }
`

function PortfolioItem({ item }) {
    const title = item.frontmatter.title || item.fields.slug
    return (
        <PortfolioItemStyled>
            <ImageWrapperLink aria-label={title} to={item.fields.slug}>
                <Image alt={title} fluid={item.frontmatter.thumbnail.childImageSharp.fluid} />
            </ImageWrapperLink>
            <div className="content">
                <PortfolioTitle>
                    <Link to={item.fields.slug}>{title}</Link>
                </PortfolioTitle>
                <p>
                    <time>{item.frontmatter.date}</time> —{' '}
                    {item.frontmatter.description || item.excerpt}
                </p>
            </div>
        </PortfolioItemStyled>
    )
}

const PortfolioList = styled.div`
    display: grid;
    grid-gap: ${rhythm(1.5)};
    margin-top: ${rhythm(2)};
`

function PortfolioIndex(props) {
    const siteTitle = `${props.data.site.siteMetadata.author} ${props.data.site.siteMetadata.title}`
    const posts = props.data.allMarkdownRemark.edges

    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO title="Portfolio" />
            <PageTitle>Cases of Study</PageTitle>
            <PortfolioList>
                {posts.map(({ node }, i) => (
                    <PortfolioItem key={i} item={node} />
                ))}
            </PortfolioList>
        </Layout>
    )
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
                        date(formatString: "MMMM YYYY")
                        title
                        description
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 720, maxHeight: 480) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
