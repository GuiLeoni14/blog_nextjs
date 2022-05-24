import { data } from '../../api/data.json';
const {
    attributes: {
        cover: {
            data: {
                attributes: { url, alternativeText },
            },
        },
        content,
        excerpt,
        title,
        slug,
    },
    id,
} = data.posts.data[0];
export default {
    id,
    url_image: url,
    content,
    title,
    excerpt,
    alt: alternativeText,
    slug,
};
