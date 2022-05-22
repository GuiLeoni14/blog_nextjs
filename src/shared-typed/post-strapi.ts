import { PostTag } from './tag';

export type PostStrapi = {
    id: string;
    attributes: {
        tags: PostTag[];
        slug: string;
        content: string;
        allowComments: boolean;
        title: string;
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
