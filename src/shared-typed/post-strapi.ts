import { TStrapiImage } from './strapi-image';
import { PostTag } from './tag';

export type TPostStrapi = {
    id: string;
    attributes: {
        tags: PostTag[];
        slug: string;
        content: string;
        allowComments: boolean;
        title: string;
        excerpt: string;
        cover: TStrapiImage;
    };
};
