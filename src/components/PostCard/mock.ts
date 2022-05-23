import { data } from '../../api/data.json';
const {
    attributes: {
        cover: {
            data: {
                attributes: { url },
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
    image: url,
    content,
    title,
    excerpt,
    slug,
};
