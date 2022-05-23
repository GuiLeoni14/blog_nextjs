import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { Author } from '../shared-typed/author';
import { Category } from '../shared-typed/category';
import { Metadata } from '../shared-typed/metadata';
import { PostStrapi } from '../shared-typed/post-strapi';
import { MenuPropsLinks, SettingsStrapi } from '../shared-typed/settings-strapi';
import { StrapiImage } from '../shared-typed/strapi-image';
import { refactorObjPost } from '../utils';
export type TLoadPostsVariables = {
    categorySlug?: { contains: string };
    postSlug?: string;
    postSearch?: string;
    authorSlug?: string;
    tagSlug?: string;
    sort?: string[];
    start?: number;
    limit?: number;
};
export type ArticleMetaProps = {
    createdAt: string;
    author?: Author;
    categories?: Category[];
};
export type ArticleHeaderProps = {
    id: string;
    title: string;
    excerpt: string;
    cover: StrapiImage;
} & ArticleMetaProps;

export type TPostProps = {
    cover: {
        alternativeText: string;
        url: string;
        id: string;
    };
    tags: Metadata[];
    slug: string;
    content: string;
    allowComments: boolean;
    title: string;
    id: string;
};

export type StrapiPostAndSettings = {
    setting: { data: SettingsStrapi };
    posts: { data: PostStrapi[] };
    variables?: TLoadPostsVariables;
};

export const loadPosts = async (variables: TLoadPostsVariables = {}): Promise<StrapiPostAndSettings> => {
    const defaultVariables: TLoadPostsVariables = {
        sort: ['createdAt:desc'],
        start: 0,
        limit: 10,
    };
    const data: StrapiPostAndSettings = await request(config.graphql_URL, GRAPHQL_QUERY, {
        ...defaultVariables,
        ...variables,
    });
    return data;
};
