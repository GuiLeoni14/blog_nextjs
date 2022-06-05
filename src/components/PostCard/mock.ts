import { data } from '../../utils/data.json';
const {
    attributes: { cover, content, excerpt, title, slug, tags, allowComments, createdAt },
    id,
} = data.posts.data[0];

export default {
    id,
    attributes: {
        content,
        title,
        excerpt,
        tags,
        allowComments,
        cover,
        slug,
        createdAt,
    },
};
