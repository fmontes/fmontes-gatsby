import React from 'react'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './Menu'
import Bio from '../components/bio'

const LinkStyled = styled(Link)`
    box-shadow: none;
    color: inherit;
    text-decoration: none;
`

const HeaderStyled = styled.h3`
    font-family: Montserrat, sans-serif;
    margin-top: 0;
    margin-bottom: ${rhythm(2)};
`

function Header() {
    const { site } = useStaticQuery(
        graphql`
            query HeaderQuery {
                site {
                    siteMetadata {
                        title
                        author
                    }
                }
            }
        `
    )

    return (
        <header>
            <HeaderStyled>
                <LinkStyled
                    to={`/`}
                >{`${site.siteMetadata.author} ${site.siteMetadata.title}`}</LinkStyled>
            </HeaderStyled>
            <Bio />
            <Menu />
        </header>
    )
}

export default Header
