import { TPostCardProps } from '.';
import { data } from '../../api/data.json';
const {
    attributes: { cover, content, excerpt, title, slug },
    id,
} = data.posts.data[0];

export default {
    id,
    attributes: {
        content,
        title,
        excerpt,
        cover,
        slug,
    },
};
