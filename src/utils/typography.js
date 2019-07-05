import Typography from 'typography'
import gray from 'gray-percentage'

const typography = new Typography({
    title: '@fmontes',
    baseFontSize: '18px',
    baseLineHeight: 1.5,
    headerLineHeight: 1.5,
    headerFontFamily: ['Ubuntu', 'sans-serif'],
    bodyFontFamily: ['Inconsolata', 'sans-serif'],
    headerColor: 'hsla(0,0%,0%,1)',
    bodyColor: 'hsla(0,0%,0%,0.8)',
    headerWeight: 600,
    bodyWeight: 400,
    boldWeight: 700,
    color: {
        primary: '#156D81',
        secondary: '#F4E060',
        border: gray(90)
    },
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        a: {
            color: options.color.primary,
            boxShadow: `0 1px ${options.color.primary}`,
            textDecoration: 'none',
        },
        'a:hover,a:active': {
            color: options.bodyColor,
            boxShadow: `0 1px ${options.bodyColor}`,
        },
        'h1,h2,h3,h4,h5,h6': {
            marginTop: rhythm(2),
            letterSpacing: '-0.025em',
        },
        blockquote: {
            ...scale(1 / 5),
            color: gray(41),
            paddingLeft: rhythm(18 / 16),
            marginLeft: 0,
            borderLeft: `${rhythm(6 / 24)} solid`,
            borderColor: options.color.secondary,
        },
        'blockquote > :last-child': {
            marginBottom: 0,
        },
        'blockquote cite': {
            ...adjustFontSizeTo(options.baseFontSize),
            color: options.bodyColor,
            fontWeight: options.bodyWeight,
        },
        'blockquote cite:before': {
            content: '"— "',
        },
        'a.gatsby-resp-image-link': {
            boxShadow: `none`,
        },
        '.gatsby-highlight': {
            marginBottom: `${rhythm(1)}`,
        },
        '.post__content code[class*="language-"], .post__content code[class*="language-"]': {
            fontSize: '0.75rem',
        },
        '.post__content pre[class*="language-"]::before, .post__content pre[class*="language-"]::after': {
            display: 'none',
        },
        '.post__content pre[class*="language-"] > code': {
            borderColor: options.color.primary,
            borderWidth: '5px'
        }
    }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options
