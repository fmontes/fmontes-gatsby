import React from 'react'
import { rhythm, scale } from '../../../utils/typography'

function TechListItem({ item }) {
    return (
        <>
            <span
                style={{
                    ...scale(1.5),
                    backgroundColor: `#000`,
                    color: `#fff`,
                    fontFamily: `Montserrat, sans-serif`,
                }}
            >
                {item.charAt(0)}
            </span>
            <span>{item}</span>
        </>
    )
}

function TechList({ tech }) {
    return (
        <div
            style={{
                display: `flex`,
                marginBottom: rhythm(1),
                justifyContent: `space-between`,
            }}
        >
            {tech
                .split(',')
                .map((i) => i.trim())
                .map((item, i) => (
                    <TechListItem item={item} key={i} />
                ))}
        </div>
    )
}

export default TechList
