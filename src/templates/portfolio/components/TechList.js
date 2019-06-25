import React from 'react'
import { rhythm } from '../../../utils/typography'
import styled from 'styled-components'

import TechListItem from './TechListItem'

const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: ${rhythm(1)};
    justify-content: space-between;
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
