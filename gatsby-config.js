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
        }
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'blog',
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
                            maxWidth: 590,
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
                //trackingId: 'ADD YOUR TRACKING ID HERE',
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
                icon: 'content/assets/gatsby-icon.png',
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
    ],
}
