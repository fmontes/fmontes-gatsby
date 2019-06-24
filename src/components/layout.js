import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import Header from '../components/Header'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
    render() {
        const { location, children } = this.props

        return (
            <Wrapper>
                <Header location={location} />
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Wrapper>
        )
    }
}

export default Layout
