import React from 'react'
import styled from 'styled-components'

import { rhythm, options } from '../utils/typography'
import Topics from './Topics';

const langs = {
    CSS: '#563d7c',
    HTML: '#e34c26',
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
}

const RepoItem = styled.article`
    border: solid 1px ${options.color.border};
    padding: ${rhythm(1)};
    position: relative;

    h3 {
        margin-top: 0;
    }
`

const ReposListStyled = styled.div`
    display: grid;
    grid-gap: ${rhythm(1)};
`

const DemoButtom = styled.a`
    border: solid 1px ${options.color.primary};
    box-shadow: none;
    display: inline-block;
    padding: ${rhythm(1 / 4)} ${rhythm(1)};
    text-transform: uppercase;

    &:hover,
    &:active {
        border: solid 1px ${options.color.bodyColor};
        box-shadow: none;
    }
`

const LangBadge = styled.span`
    border-bottom: solid 1px ${options.color.border};
    box-shadow: inset 6px 0 0 ${({ children }) => langs[children]};
    font-size: ${rhythm(1 / 2)};
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 0;
    padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)} ${rhythm(1 / 8)} ${rhythm(1 / 2)};
`

function Repo({
    item: {
        name,
        description,
        primaryLanguage,
        homepageUrl,
        url,
        repositoryTopics: { edges },
    },
}) {
    return (
        <RepoItem>
            <LangBadge>{primaryLanguage.name}</LangBadge>
            <h3>
                <a href={url}>{name}</a>
            </h3>
            <p>{description}</p>
            <Topics edges={edges}></Topics>

            <DemoButtom
                rel="noreferrer"
                aria-label={`Link to ${name} demo`}
                target="_blank"
                href={homepageUrl}
            >
                demo →
            </DemoButtom>
        </RepoItem>
    )
}

export default function ReposList({ repos }) {
    return (
        <ReposListStyled>
            {repos.map(({ node }, i) => (
                <Repo key={i} item={node} />
            ))}
        </ReposListStyled>
    )
}
