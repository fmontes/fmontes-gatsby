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

    @media (min-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

const ImageStyled = styled(Image)`
    border-radius: 100%;
    height: 50px;
    margin-bottom: 0;
    margin-right: ${rhythm(1 / 2)};
    min-width: 50px;

    @media (min-width: 768px) {
        height: 100px;
        margin: 0 0 ${rhythm(1 / 2)};
        min-width: 100px;
    }
`

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={(data) => {
                const { author } = data.site.siteMetadata
                return (
                    <BioWrapper>
                        <ImageStyled
                            fluid={data.avatar.childImageSharp.fluid}
                            alt={author}
                            imgStyle={{
                                borderRadius: `50%`,
                            }}
                        />
                        <p>
                            Frontend Developer with a graphic design degree. UX/UI and Javascript
                            crafter.
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
                fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
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
