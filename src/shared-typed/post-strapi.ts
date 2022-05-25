import { TStrapiImage } from './strapi-image';
import { TPostTag } from './tag';

export type TPostStrapi = {
    id: string;
    attributes: {
        tags: { data: TPostTag[] };
        slug: string;
        content: string;
        allowComments: boolean;
        title: string;
        excerpt: string;
        cover: TStrapiImage;
        createdAt: string;
        // updatedAt: string;
        // publishedAt: string;
    };
};
