import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
`

export default function BlogItem({ item: { title, slug, date, description } }) {
    return (
        <article>
            <BlogTitle>
                <Link to={slug}>{title}</Link>
            </BlogTitle>
            <time>{date}</time>
            <p
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </article>
    )
}
