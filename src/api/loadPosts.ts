import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { Author } from '../shared-typed/author';
import { Category } from '../shared-typed/category';
import { PostStrapi } from '../shared-typed/post-strapi';
import { SettingsStrapi } from '../shared-typed/settings-strapi';
import { StrapiImage } from '../shared-typed/strapi-image';
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

export type PostProps = ArticleHeaderProps & {
    content: string;
};

export type StrapiPostAndSettings = {
    setting: SettingsStrapi;
    posts: { data: PostStrapi[] };
    variables?: TLoadPostsVariables;
};
export const loadPosts = async (variables: TLoadPostsVariables = {}): Promise<StrapiPostAndSettings> => {
    const defaultVariables: TLoadPostsVariables = {
        sort: ['createdAt:desc'],
        start: 0,
        limit: 10,
    };
    const data = await request(config.graphql_URL, GRAPHQL_QUERY, {
        ...defaultVariables,
        ...variables,
    });
    return data;
};
