import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import twitter from '../assets/social-icons/twitter.svg'
import instagram from '../assets/social-icons/instagram.svg'
import stackoverflow from '../assets/social-icons/stackoverflow.svg'
import linkedin from '../assets/social-icons/linkedin.svg'
import github from '../assets/social-icons/github.svg'

const Icons = {
    twitter,
    instagram,
    stackoverflow,
    linkedin,
    github,
}

const Wrapper = styled.span`
    display: flex;
    margin-bottom: ${rhythm(1)};
`

const ItemWrapper = styled.a`
    box-shadow: none;
    display: flex;
    height: 48px;
    justify-content: center;
    min-width: 48px;

    @media (min-width: 768px) {
        display: block;
        height: 24px;
        margin-right: ${rhythm(1 / 2)};
        min-width: 24px;
    }

    svg {
        width: 24px;
    }

    &:hover,
    &:active {
        box-shadow: none;
    }

    &:last-child {
        margin-right: 0;
    }
`

function SocialList() {
    return (
        <StaticQuery
            query={socialQuery}
            render={(data) => {
                const { social } = data.site.siteMetadata
                return (
                    <Wrapper>
                        {Object.keys(social).map((media, i) => {
                            const Icon = Icons[media]
                            return (
                                <ItemWrapper
                                    rel="noreferrer"
                                    aria-label={`Link to ${media} account`}
                                    target="_blank"
                                    key={i}
                                    href={social[media]}
                                >
                                    <Icon />
                                </ItemWrapper>
                            )
                        })}
                    </Wrapper>
                )
            }}
        />
    )
}

export default SocialList

const socialQuery = graphql`
    query SocialQuery {
        site {
            siteMetadata {
                social {
                    github
                    instagram
                    linkedin
                    stackoverflow
                    twitter
                }
            }
        }
    }
`
