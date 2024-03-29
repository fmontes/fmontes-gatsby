import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import PageTitle from '../../components/PageTitle'

export default function UsesIndex({ data, location }) {
    const siteTitle = `${data.site.siteMetadata.author} ${data.site.siteMetadata.title}`

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Uses" />
            <PageTitle>Things I use everyday</PageTitle>

            <h2>Hardware</h2>
            <ul>
                <li>Apple Macbook Pro 15" 2017</li>
                <li>
                    <a href="https://www.asus.com/Commercial-Monitors/PB287Q/" target="_blank">
                        ASUS PB287Q Gaming Monitor - 28" 4K UHD
                    </a>
                </li>
                <li>
                    <a href="https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver">
                        Apple Magic Mouse 2 - Silver
                    </a>
                </li>
                <li>
                    <a href="https://www.apple.com/airpods-pro/">Apple AirPods Pro</a>
                </li>
                <li>
                    <a href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B01E3SNO1G">
                        Bose QuietComfort 35 (Series I)
                    </a>
                </li>
                <li>
                    <a href="https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english">
                        Apple Magic Keyboard - US English
                    </a>
                </li>
                <li>
                    <a href="https://satechi.net/products/type-c-multi-port-adapter-with-ethernet-v2?variant=45020091145">
                        Satechi Type-C Multi-Port Adapter 4K with Ethernet V2
                    </a>
                </li>
                <li>
                    <a href="https://www.amazon.com/gp/product/B07PMSBLTH/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1">
                        RALENO LED Video Soft Light Panel
                    </a>
                </li>
                <li>
                    <a href="https://www.amazon.com/gp/product/B07WLWN2ZT/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1">
                        USB Microphone, TONOR
                    </a>
                </li>
            </ul>

            <h2>Software</h2>
            <ul>
                <li>
                    <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                </li>
                <li>
                    <a href="https://iterm2.com/">iTerm 2</a> with{' '}
                    <a href="https://ohmyz.sh/">Oh My Zsh</a>
                </li>
                <li>
                    <a href="https://www.alfredapp.com/">Alfred 4</a>
                </li>
                <li>
                    <a href="https://www.google.com/chrome/">Google Chrome</a>
                </li>
                <li>
                    <a href="https://slack.com/">Slack</a>
                </li>
                <li>
                    <a href="https://www.spotify.com/">Spotify</a>
                </li>
                <li>
                    <a href="https://tweetdeck.twitter.com/">Tweetdeck</a>
                </li>
                <li>
                    <a href="https://sketch.com/">Sketch</a> and{' '}
                    <a href="http://figma.com/">Figma</a>
                </li>
                <li>
                    Affinity <a href="https://affinity.serif.com/en-gb/designer/">Designer</a> and{' '}
                    <a href="https://affinity.serif.com/en-gb/photo/">Photo</a>
                </li>
            </ul>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`
