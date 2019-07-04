import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: ${rhythm(1)};

    @media (min-width: 768px) {
        max-width: ${rhythm(33.25)};
        padding: ${rhythm(1.5)} 0;

        footer,
        main {
            margin-left: ${rhythm(10)};
        }

        footer {
            margin-top: ${rhythm(5)};
        }

        main {
            min-height: ${rhythm(18)};
        }
    }
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
                    {` `} pure 🔥 and <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Wrapper>
        )
    }
}

export default Layout
