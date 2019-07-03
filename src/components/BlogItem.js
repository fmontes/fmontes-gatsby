import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
`

export default function BlogItem({ item }) {
    const title = item.frontmatter.title || item.fields.slug
    return (
        <article>
            <BlogTitle>
                <Link to={item.fields.slug}>{title}</Link>
            </BlogTitle>
            <time>{item.frontmatter.date}</time>
            <p
                dangerouslySetInnerHTML={{
                    __html: item.frontmatter.description || item.excerpt,
                }}
            />
        </article>
    )
}
