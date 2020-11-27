const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env
const cookieStore = new FileCookieStore('./cookies.json')

function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

    return str
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    const client = new Instagram({
        username: INSTAGRAM_USERNAME,
        password: INSTAGRAM_PASSWORD,
        cookieStore,
    })
    await client.login()

    const ig = await client
        .getPhotosByUsername({ username: 'fmontes', first: 24 })
        .then(({ user: { edge_owner_to_timeline_media } }) => edge_owner_to_timeline_media.edges)

    ig.map((post) => {
        const text = post.node.edge_media_to_caption.edges[0].node.text

        const [title, ...caption] =
            text.split('—').length > 1
                ? text.split('—').filter(Boolean)
                : text.split('\n').filter(Boolean)

        console.log(caption[0])

        return {
            title,
            caption,
            slug: string_to_slug(title),
            taken_at_timestamp: post.node.taken_at_timestamp,
            shortcode: post.node.shortcode,
            edge_media_preview_like: post.node.edge_media_preview_like,
            display_resources: post.node.display_resources,
        }
    })
        .filter(Boolean)
        .forEach((post) => {
            const nodeMeta = {
                id: createNodeId(`ig-${post.shortcode}`),
                parent: null,
                children: [],
                internal: {
                    type: `Instagram`,
                    mediaType: `text/json`,
                    content: JSON.stringify(post),
                    contentDigest: createContentDigest(post),
                },
            }
            const node = Object.assign({}, post, nodeMeta)
            createNode(node)
        })
}
