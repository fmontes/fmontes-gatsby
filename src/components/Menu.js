import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

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
                    <Link key={i} style={{ marginRight: rhythm(0.5) }} to={item.link}>
                        {item.label}
                    </Link>
                ))}
            </>
        )
    }
}

export default Menu
