import { data } from '../../api/data.json';
const {
    attributes: { cover, content, excerpt, title, slug, tags, autor, allowComments, createdAt, categories },
    id,
} = data.posts.data[0];

export default {
    id,
    attributes: {
        content,
        title,
        categories,
        excerpt,
        tags,
        autor,
        allowComments,
        cover,
        slug,
        createdAt,
    },
};
