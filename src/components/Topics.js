import React from 'react'
import styled from 'styled-components'
import { rhythm, options } from '../utils/typography'

const TopicsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${rhythm(1)};
`

const TopicStyled = styled.span`
    display: block;
    font-size: ${rhythm(1 / 1.75)};
    position: relative;
    padding: 0 ${rhythm(1 / 2)};
    margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 4)} 0;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    span {
        background-color: ${options.color.primary};
        bottom: 0;
        left: 0;
        opacity: 0.1;
        position: absolute;
        right: 0;
        top: 0;
    }
`

function getTopics(edges) {
    return edges
        .map((item) => item.node)
        .map((node) => node.topic.name)
        .filter((name) => name !== 'fmonteslab')
}

function Topic({ topic }) {
    return (
        <TopicStyled>
            <span></span>
            {topic}
        </TopicStyled>
    )
}

function Topics({ edges }) {
    const topics = getTopics(edges)
    return (
        <TopicsStyled>
            {topics.map((topic, i) => (
                <Topic key={i} topic={topic} />
            ))}
        </TopicsStyled>
    )
}

export default Topics
