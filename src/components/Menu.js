import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const LinkStyled = styled(Link)`
    margin-right: ${rhythm(0.5)};
`

const navItems = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'Blog',
        link: '/blog',
    },
    {
        label: 'Portfolio',
        link: '/portfolio',
    },
]

class Menu extends React.Component {
    render() {
        return (
            <>
                {navItems.map((item, i) => (
                    <LinkStyled key={i} to={item.link}>
                        {item.label}
                    </LinkStyled>
                ))}
            </>
        )
    }
}

export default Menu
