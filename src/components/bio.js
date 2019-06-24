/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const BioWrapper = styled.div`
    display: flex;
    margin-bottom: rhythm(2.5);
`

const ImageStyled = styled(Image)`
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 50px;
    border-radius: 100%;
`

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={(data) => {
                const { author, social } = data.site.siteMetadata
                return (
                    <BioWrapper>
                        <ImageStyled
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            imgStyle={{
                                borderRadius: `50%`,
                            }}
                        />
                        <p>
                            Written by <strong>{author}</strong> who lives and works in Costa Rica
                            building useful things.
                            {` `}
                            <a href={`https://twitter.com/${social.twitter}`}>
                                You should follow him on Twitter
                            </a>
                        </p>
                    </BioWrapper>
                )
            }}
        />
    )
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`

export default Bio
