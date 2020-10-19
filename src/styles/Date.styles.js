import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const { fontSize, lineHeight } = scale(-1 / 5)

const DateStyled = styled.p`
    display: block;
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin-bottom: ${rhythm(1)};
    margin-top: ${rhythm(-1)};
`

export default DateStyled;