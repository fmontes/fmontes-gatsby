import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import BlogItem from '../../components/BlogItem'
import PageTitle from '../../components/PageTitle'

class Instagram extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allInstagram.edges
        console.log(posts)

        return (
            <Layout location={this.props.location}>
                <SEO title="Post from Instagram" />
                <PageTitle>Post from Instagram</PageTitle>
                {posts.map(({ node }, i) => {
                    console.log(node.slug)
                    const date = new Date(node.taken_at_timestamp * 1000).toLocaleDateString(
                        'en-US',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                    )
                    const post = {
                        title: node.title,
                        slug: `/instagram/${node.slug}`,
                        description: node.caption[0],
                        date: date,
                    }
                    return <BlogItem item={post} key={i} />
                })}
            </Layout>
        )
    }
}

export default Instagram

export const instagramQuery = graphql`
    query {
        allInstagram {
            edges {
                node {
                    taken_at_timestamp
                    shortcode
                    caption
                    title
                    slug
                    display_resources {
                        src
                        config_width
                        config_height
                    }
                    edge_media_preview_like {
                        count
                    }
                }
            }
        }
    }
`
