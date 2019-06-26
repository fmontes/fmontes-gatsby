import React from 'react'
import { rhythm } from '../../../utils/typography'
import styled from 'styled-components'
import { size } from './TechListItem'

import TechListItem from './TechListItem'

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${size}, 1fr));
    margin-bottom: ${rhythm(1)};
    grid-gap: 1rem;
`

function TechList({ tech }) {
    return (
        <ItemWrapper>
            {tech
                .split(',')
                .map((item) => item.trim())
                .map((item, i) => (
                    <TechListItem item={item} key={i} />
                ))}
        </ItemWrapper>
    )
}

export default TechList
