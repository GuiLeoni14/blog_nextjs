import { TArticleHeaderProps } from '.';
import { data } from '../../utils/data.json';
export default {
    id: data.posts.data[0].id,
    author: data.posts.data[0].attributes.autor.data,
    ...data.posts.data[0].attributes,
    createdAt: '2022-05-20T00:53:24.625Z',
    categories: data.posts.data[0].attributes.categories,
} as TArticleHeaderProps;
