import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Menu from './Menu'

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
        <Link
            style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
            }}
            to={`/`}
        >
            {`${site.siteMetadata.author} ${site.siteMetadata.title}`}
        </Link>
    )

    let header

    if (isHome(location.pathname)) {
        header = (
            <h1
                style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                {content}
            </h1>
        )
    } else {
        header = (
            <h3
                style={{
                    fontFamily: `Montserrat, sans-serif`,
                    marginTop: 0,
                }}
            >
                {content}
            </h3>
        )
    }

    return (
        <header>
            {header}
            <nav
                style={{
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                <Menu />
            </nav>
        </header>
    )
}

export default Header
