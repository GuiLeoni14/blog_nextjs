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
        cover: {
            data: {
                id: string;
                attributes: {
                    alternativeText: string;
                    url: string;
                };
            };
        };
    };
};
