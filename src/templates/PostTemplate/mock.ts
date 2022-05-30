import { TPostTemplateProps } from '.';
import { data } from '../../api/data.json';
export default {
    settings: data.setting,
    post: data.posts.data[0],
} as TPostTemplateProps;
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
