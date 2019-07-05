import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const CaseItemStyled = styled.article`
    align-items: center;
    display: grid;
    grid-gap: ${rhythm(1)};
    grid-template-columns: repeat(auto-fit, minmax(${rhythm(11)}, 1fr));
`

const CaseListStyled = styled.div`
    display: grid;
    grid-gap: ${rhythm(1.5)};
    margin-top: ${rhythm(2)};
`

const CaseListTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
    margin-top: 0;
`

const ImageWrapperLink = styled(Link)`
    box-shadow: none;
    width: 100%;

    &:hover,
    &:active {
        box-shadow: none;
    }

    img {
        margin-bottom: 0;
    }
`

function CaseItem({ item }) {
    const title = item.frontmatter.title || item.fields.slug
    return (
        <CaseItemStyled>
            <ImageWrapperLink aria-label={title} to={item.fields.slug}>
                <Image alt={title} fluid={item.frontmatter.thumbnail.childImageSharp.fluid} />
            </ImageWrapperLink>
            <div className="content">
                <CaseListTitle>
                    <Link to={item.fields.slug}>{title}</Link>
                </CaseListTitle>
                <p>
                    <time>{item.frontmatter.date}</time> —{' '}
                    {item.frontmatter.description || item.excerpt}
                </p>
            </div>
        </CaseItemStyled>
    )
}

export default function CasesList({ posts }) {
    return (
        <CaseListStyled>
            {posts.map(({ node }, i) => (
                <CaseItem key={i} item={node} />
            ))}
        </CaseListStyled>
    )
}
