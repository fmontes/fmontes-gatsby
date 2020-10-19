import React from 'react'

const LINK_EXP = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
const HASHTAG_EXP = /#+([a-zA-Z0-9_]+)/gi
const USER_EXP = /@([a-zA-Z0-9_]+)/gi
const FULL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})|(#[a-zA-Z0-9_]+)|(@[a-zA-Z0-9_]+)/g

function mapLinks(text, fn) {
    return text
        .toString()
        .split(FULL)
        .filter(Boolean)
        .map((chunk, i) => {
            if (chunk.match(USER_EXP)) {
                return fn(chunk, i, false, true)
            }

            if (chunk.match(LINK_EXP)) {
                return fn(chunk, i)
            }

            if (chunk.match(HASHTAG_EXP)) {
                return fn(chunk, i, true)
            }

            return chunk
        })
}

const AutoLink = ({ children }) => (
    <p>
        {mapLinks(children, (chunk, i, isHashtag = false, isUser = false) => {
            let url = chunk

            if (isHashtag) {
                url = `https://www.instagram.com/explore/tags/${chunk.slice(1)}/`
            }

            if (isUser) {
                url = `https://www.instagram.com/${chunk.slice(1)}/`
            }

            return (
                <a key={i} href={url} rel="noreferrer" target="_blank">
                    {chunk}
                </a>
            )
        })}
    </p>
)

export default AutoLink
