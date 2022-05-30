import { request } from 'graphql-request';
import { config } from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { TAuthor } from '../shared-typed/author';
import { TCategory } from '../shared-typed/category';
import { TMetadata } from '../shared-typed/metadata';
import { TPostStrapi } from '../shared-typed/post-strapi';
import { TSettingsStrapi } from '../shared-typed/settings-strapi';
import { TStrapiImage } from '../shared-typed/strapi-image';

export type TLoadPostsVariables = {
    categorySlug?: { contains: string };
    postSlug?: { contains: string };
    postSearch?: string;
    authorSlug?: { contains: string };
    tagSlug?: { contains: string };
    sort?: string;
    start?: number;
    limit?: number;
};
export type ArticleMetaProps = {
    createdAt: string;
    author?: TAuthor;
    categories?: TCategory[];
};
export type ArticleHeaderProps = {
    id: string;
    title: string;
    excerpt: string;
    cover: TStrapiImage;
} & ArticleMetaProps;

export type TPostProps = {
    cover: TStrapiImage;
    tags: TMetadata[];
    slug: string;
    excerpt: string;
    content: string;
    allowComments: boolean;
    title: string;
    id: string;
};

export type StrapiPostAndSettings = {
    setting: { data: TSettingsStrapi };
    posts: { data: TPostStrapi[] };
    variables?: TLoadPostsVariables;
};
export const defaultLoadPostsVariables: TLoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 3,
};
export const loadPosts = async (variables: TLoadPostsVariables = {}): Promise<StrapiPostAndSettings> => {
    const data = await request(config.graphql_URL, GRAPHQL_QUERY, {
        ...defaultLoadPostsVariables,
        ...variables,
    });

    return data;
};
