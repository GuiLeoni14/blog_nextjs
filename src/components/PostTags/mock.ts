import { data } from '../../utils/data.json';
const {
    attributes: { tags },
} = data.posts.data[0];

export default {
    tags: tags.data,
};
