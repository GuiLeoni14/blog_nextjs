import { data } from '../../api/data.json';
const {
    attributes: { tags },
} = data.posts.data[0];

export default {
    tags: tags.data,
};
