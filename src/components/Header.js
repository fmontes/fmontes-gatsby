import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import Menu from './Menu'
import Bio from './Bio'
import SocialList from './SocialList'



const HeaderStyled = styled.header`
    @media (min-width: 768px) {
        width: ${rhythm(8)};
        position: fixed;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <Bio />
            <SocialList />
            <Menu />
        </HeaderStyled>
    )
}

export default Header
