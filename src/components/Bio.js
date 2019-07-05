/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { rhythm, options } from '../utils/typography'
import LocationIcon from '../assets/location.svg'

const Logo = styled(Link)`
    align-items: flex-start;
    box-shadow: none;
    color: ${options.bodyColor};
    display: flex;

    &:hover,
    &:active {
        box-shadow: none;
        color: ${options.bodyColor};
    }

    @media (min-width: 768px) {
        flex-direction: column;
    }
`

const ImageStyled = styled(Image)`
    border-radius: 100%;
    height: 50px;
    margin-bottom: 0;
    margin-right: ${rhythm(1 / 2)};
    min-width: 50px;
    width: 50px;

    @media (min-width: 768px) {
        align-self: center;
        height: 100px;
        margin: 0 0 ${rhythm(1)};
        min-width: 100px;
        width: 100px;
    }
`

const Name = styled.h3`
    margin: 0 0 ${rhythm(1 / 4)};
`

const Location = styled.p`
    display: flex;
    align-items: center;

    svg {
        margin-right: ${rhythm(1 / 8)}
    }
`

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={(data) => {
                const { author, title, description } = data.site.siteMetadata
                return (
                    <>
                        <Logo to={`/`} title="Link to home">
                            <ImageStyled
                                fluid={data.avatar.childImageSharp.fluid}
                                alt={`${author} ${title}`}
                                imgStyle={{
                                    borderRadius: `50%`,
                                }}
                            />
                            <div>
                                <Name>{author}</Name>
                                <Location><LocationIcon />Costa Rica (GMT-6)</Location>
                                <p>{description} <Link to={'/about-me'}>More</Link></p>
                            </div>
                        </Logo>
                    </>
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
                title
                description
            }
        }
    }
`

export default Bio
