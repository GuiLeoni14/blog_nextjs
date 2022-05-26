import { TAuthor } from './author';
import { TCategory } from './category';
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
        categories: { data: TCategory[] };
        autor: { data: TAuthor };
        excerpt: string;
        cover: TStrapiImage;
        createdAt: string;
        // updatedAt: string;
        // publishedAt: string;
    };
};
