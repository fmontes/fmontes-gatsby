module.exports = {
    siteMetadata: {
        title: 'Frontend Javascript Developer',
        author: 'Freddy Montes',
        description:
            'Frontend Developer with a graphic design degree. UX/UI and Javascript crafter.',
        siteUrl: 'https://fmontes/',
        social: {
            github: '//github.com/fmontes/',
            instagram: '//instagram.com/fmontes',
            linkedin: '//linkedin.com/in/fmontes/',
            stackoverflow: '//stackoverflow.com/users/3367318/fmontes',
            twitter: '//twitter.com/fmontes',
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'content',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 660,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-lazy-load',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GA_ID,
            },
        },
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Freddy Montes Frontend Developer',
                short_name: 'fmontes',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'content/assets/fmontes-icon.png',
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /src\/assets/,
                },
            },
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: process.env.GITHUB_TOKEN,
                graphQLQuery: `{
                    search(query: "fmonteslab user:fmontes", type: REPOSITORY, first: 100) {
                        edges {
                            node {
                                ... on Repository {
                                    name
                                    url
                                    homepageUrl
                                    description
                                    createdAt
                                    pushedAt
                                    primaryLanguage {
                                        id
                                        name
                                    }
                                    repositoryTopics(first: 100) {
                                        edges {
                                            node {
                                                topic {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                `,
            }
        },
    ],
}
