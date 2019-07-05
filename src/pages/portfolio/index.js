import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import PageTitle from '../../components/PageTitle'
import CasesList from '../../components/CasesList'
import ReposList from '../../components/ReposList'

function PortfolioIndex({ data, location }) {
    const siteTitle = `${data.site.siteMetadata.author} ${data.site.siteMetadata.title}`
    const posts = data.allMarkdownRemark.edges
    const repos = data.githubData.data.search.edges

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Portfolio" />
            <PageTitle>Cases of Study</PageTitle>
            <CasesList posts={posts} />
            <PageTitle>My Lab</PageTitle>
            <ReposList repos={repos} />
        </Layout>
    )
}

export default PortfolioIndex

export const pageQuery = graphql`
    query {
        githubData {
            data {
                search {
                    edges {
                        node {
                            name
                            url
                            homepageUrl
                            description
                            createdAt
                            pushedAt
                            primaryLanguage {
                                id
                                name
                            }
                            repositoryTopics {
                                edges {
                                    node {
                                        topic {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
