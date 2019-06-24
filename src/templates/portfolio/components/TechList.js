import React from 'react'
import { rhythm, scale } from '../../../utils/typography'
import styled from 'styled-components'

const { fontSize, lineHeight } = scale(1.5)

const Item = styled.span`
    background-color: #000;
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-size: ${fontSize};
    line-height: ${lineHeight};
`

const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: ${rhythm(1)};
    justify-content: space-between;
`

function TechListItem({ item }) {
    return (
        <>
            <Item>{item.charAt(0)}</Item>
            <span>{item}</span>
        </>
    )
}

function TechList({ tech }) {
    return (
        <ItemWrapper>
            {tech
                .split(',')
                .map((i) => i.trim())
                .map((item, i) => (
                    <TechListItem item={item} key={i} />
                ))}
        </ItemWrapper>
    )
}

export default TechList
