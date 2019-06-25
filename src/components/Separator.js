import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const HRStyled = styled.hr`
    margin-top: ${rhythm(2)};
    margin-bottom: ${rhythm(2)};
`

function Separator({ item }) {
    return <HRStyled />
}

export default Separator
