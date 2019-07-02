import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const LinkStyled = styled(Link)`
    margin-right: ${rhythm(0.5)};
    box-shadow: none;

    @media (min-width: 768px) {
        margin-right: 0;
    }
`

const NavWrapper = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const navItems = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'Portfolio',
        link: '/portfolio',
    },
]

class Menu extends React.Component {
    render() {
        return (
            <NavWrapper>
                {navItems.map((item, i) => (
                    <LinkStyled key={i} to={item.link}>
                        {item.label}
                    </LinkStyled>
                ))}
            </NavWrapper>
        )
    }
}

export default Menu
