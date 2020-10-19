import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import AutoLink from '../../components/AutoLink'
import DateStyled from '../../styles/Date.styles'

const ImageLink = styled.a`
    box-shadow: none;
    display: block;

    &:hover {
        box-shadow: none;
    }
`

class InstagramPost extends React.Component {
    render() {
        const instagram = this.props.data.instagram
        const date = new Date(
            this.props.data.instagram.taken_at_timestamp * 1000
        ).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

        return (
            <Layout location={this.props.location}>
                <SEO title={instagram.title} description={instagram.caption.join(' ')} />
                <header>
                    <h1>{instagram.title}</h1>
                    <DateStyled>{date}</DateStyled>
                    <p>This post was originally posted on my <a href="https://instagram.com/fmontes" target="_blank" rel="noreferrer">Instagram account</a>.</p>
                </header>
                <ImageLink
                    href={`https://www.instagram.com/p/${instagram.shortcode}/`}
                    alt="View original post "
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram.display_resources[0].src} alt={instagram.title} />
                </ImageLink>

                {instagram.caption.map((line) => {
                    return line
                        .split('\n')
                        .filter(Boolean)
                        .filter((el) => el !== '.')
                        .map((line2, i) => {
                            if (!line2.startsWith('#')) {
                                return <AutoLink key={i}>{line2}</AutoLink>
                            }
                            return null
                        })
                })}
            </Layout>
        )
    }
}

export default InstagramPost

export const pageQuery = graphql`
    query InstagramPostByShortcode($shortcode: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        instagram(shortcode: { eq: $shortcode }) {
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
`
