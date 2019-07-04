import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import gray from 'gray-percentage'

export const PageTitleStyled = styled.h2`
    margin-bottom: ${rhythm(2)};
    border-bottom: solid 1px ${gray(90)};
`

function PageTitle({ children }) {
    return <PageTitleStyled>{children}</PageTitleStyled>
}

export default PageTitle
