import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './Menu'

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const { fontSize, lineHeight } = scale(1.5)

const HomeHeader = styled.h1`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
`

const InternalHeader = styled.h3`
    font-family: Montserrat, sans-serif;
    margin-top: 0;
`

const NavWrapper = styled.nav`
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
`

const isHome = (path) => {
    return `${__PATH_PREFIX__}/` === path
}

function Header({ location }) {
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
    const content = (
        <LinkStyled to={`/`}>{`${site.siteMetadata.author} ${site.siteMetadata.title}`}</LinkStyled>
    )

    let header

    if (isHome(location.pathname)) {
        header = <HomeHeader>{content}</HomeHeader>
    } else {
        header = <InternalHeader>{content}</InternalHeader>
    }

    return (
        <header>
            {header}
            <NavWrapper>
                <Menu />
            </NavWrapper>
        </header>
    )
}

export default Header
