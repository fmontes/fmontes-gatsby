import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const NavWrapper = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    ul,
    li {
        margin: 0;
        list-style: none;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        @media (min-width: 768px) {
            display: block;
        }
    }

    li {
        margin-right: ${rhythm(1 / 2)};

        @media (min-width: 768px) {
            margin: ${rhythm(1 / 4)} 0;

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                margin-bottom: 0;
                margin-right: 0;
            }
        }
    }

    a {
        margin-right: ${rhythm(0.5)};
        box-shadow: none;

        @media (min-width: 768px) {
            margin-right: 0;
        }
    }
`

const navItems = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'About me',
        link: '/about-me',
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
                <ul>
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link to={item.link}>{item.label}</Link>
                        </li>
                    ))}
                    <li><a href="mailto:me@fmontes.com?subject=Hello from your website">Get in touch</a></li>
                </ul>
            </NavWrapper>
        )
    }
}

export default Menu
