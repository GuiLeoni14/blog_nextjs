import { TPostsTemplateProps } from '.';
import { data } from '../../api/data.json';
export default {
    settings: data.setting,
    posts: data.posts.data,
} as TPostsTemplateProps;
// id: string;
// attributes: {
//     tags: TPostTag[];
//     slug: string;
//     content: string;
//     allowComments: boolean;
//     title: string;
//     excerpt: string;
//     cover: TStrapiImage;
//     createdAt: string;
// };
