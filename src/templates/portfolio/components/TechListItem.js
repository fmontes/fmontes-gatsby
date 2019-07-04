import React from 'react'
import { rhythm, scale, options } from '../../../utils/typography'
import styled from 'styled-components'

import StencilJS from '../../../assets/tech-logos/stencil.svg'
import SASS from '../../../assets/tech-logos/sass.svg'
import Angular from '../../../assets/tech-logos/angular.svg'
import RxJS from '../../../assets/tech-logos/rxjs.svg'
import Dragula from '../../../assets/tech-logos/dragula.svg'

let { fontSize, lineHeight } = scale(1)

export const size = '70px'

const fallbackColors = {
    'Web Components': '#e66e33',
    'Custom Events': '#00539f',
    'CSS Properties': '#009400',
}

const FallbackWrapper = styled.div`
    align-items: center;
    background-color: ${({ item }) => fallbackColors[item] || '#000'};
    border-radius: 35px;
    color: #fff;
    display: flex;
    font-family: ${options.headerFontFamily.join(', ')};
    font-size: ${fontSize};
    height: ${size};
    justify-content: center;
    line-height: ${lineHeight};
    width: ${size};
`

const IconWrapper = styled.div`
    align-items: center;
    display: flex;
    height: ${size};
    margin-bottom: ${rhythm(0.25)};
    width: ${size};
`

const ItemLabel = styled.span`
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.5em;
`

const Item = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const logos = {
    StencilJS,
    SASS,
    Angular,
    RxJS,
    Dragula,
}

function Fallback({ item }) {
    return (
        <FallbackWrapper item={item}>
            {item
                .split(' ')
                .map((word) => word.charAt(0))
                .join('')}
        </FallbackWrapper>
    )
}

function TechListItem({ item }) {
    const Icon = logos[item]

    return (
        <Item>
            <IconWrapper>{Icon ? <Icon /> : <Fallback item={item} />}</IconWrapper>
            <ItemLabel>{item}</ItemLabel>
        </Item>
    )
}

export default TechListItem
