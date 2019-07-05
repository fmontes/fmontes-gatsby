import React from 'react'
import styled from 'styled-components'
import { rhythm, options } from '../utils/typography'

export const PageTitleStyled = styled.h2`
    margin-bottom: ${rhythm(2)};
    border-bottom: solid 1px ${options.color.border};
`

function PageTitle({ children }) {
    return <PageTitleStyled>{children}</PageTitleStyled>
}

export default PageTitle
