import React from 'react'
import styled from 'styled-components';

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import PageTitle from '../../components/PageTitle'

const TechList = styled.ul`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );

    li {
        margin: 0;
    }
`

export default function AboutMeIndex({ data, location }) {
    const siteTitle = `${data.site.siteMetadata.author} ${data.site.siteMetadata.title}`

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About Me" />
            <PageTitle>About me</PageTitle>
            <p>Working full time in Angular, Typescript and SCSS, leading the team for revamping DotCMS administration system. Also experienced with React, Redux, GraphQL and NodeJS.</p>

            <blockquote>Code, Design, Learn and Teach.</blockquote>

            <p>Frontend is my true passion and I really enjoy the whole process of creating UIs, from the first brainstorming, wireframes, mockups, design, all the way until the final product.</p>

            <h3>Want to build something?</h3>
            <p>If you want to work with me just <a href="mailto:me@fmontes.com?subject=Hello from your website">shoot me an email</a> and I'll be ready to make it happen.</p>

            <h3>Skills</h3>
            <TechList>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Gatsby</li>
                <li>Angular</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>NoSQL</li>
                <li>Redux</li>
                <li>NGRX</li>
                <li>Firebase</li>
                <li>RxJS</li>
                <li>SASS</li>
                <li>DotCMS</li>
                <li>Wordpress</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>Web Design</li>
                <li>UX</li>
                <li>Agile</li>
                <li>Sketch</li>
                <li>Figma</li>
                <li>Photoshop</li>
            </TechList>
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
