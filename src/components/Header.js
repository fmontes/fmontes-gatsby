import React from 'react'
import Menu from './Menu'
import Bio from './Bio'
import SocialList from './SocialList'

function Header() {
    return (
        <header>
            <Bio />
            <SocialList />
            <Menu />
        </header>
    )
}

export default Header
