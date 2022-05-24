import { TPostProps, StrapiPostAndSettings } from '../api/loadPosts';

export const refactorObjPost = (afterObjPosts: StrapiPostAndSettings) => {
    const beforeObjPosts: TPostProps[] = [];
    afterObjPosts.posts.data.map((post) => {
        beforeObjPosts.push({
            id: post.id,
            ...post.attributes,
            cover: {
                id: post.attributes.cover.data.id,
                ...post.attributes.cover.data.attributes,
            },
        });
    });
    return beforeObjPosts;
};
