import { Get_Page_Content_TextQuery, Get_Posts_And_Settings_And_Content_TextDocument } from '../graphql/generated';
import { TAuthor } from '../shared-typed/author';
import { TCategory } from '../shared-typed/category';
import { TMetadata } from '../shared-typed/metadata';
import { TPostStrapi } from '../shared-typed/post-strapi';
import { TSettingsStrapi } from '../shared-typed/settings-strapi';
import { TStrapiImage } from '../shared-typed/strapi-image';
import { client } from './apollo';

export type TLoadPostsVariables = {
    categorySlug?: { contains: string };
    postSlug?: { contains: string };
    postSearch?: { contains: string };
    authorSlug?: { contains: string };
    tagSlug?: { contains: string };
    sort?: string;
    start?: number;
    limit?: number;
    pageSize?: number;
    page?: number;
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
export type TMetaPagination = {
    pagination: {
        total: number;
        page: number;
        pageSize: number;
        pageCount: number;
    };
};

export type StrapiPostAndSettings = {
    setting: { data: TSettingsStrapi };
    posts: { data: TPostStrapi[]; meta: TMetaPagination };
    variables?: TLoadPostsVariables;
    contentPage: Get_Page_Content_TextQuery;
};
export const defaultLoadPostsVariables: TLoadPostsVariables = {
    sort: 'createdAt:desc',
};

export type TLoadPostsResponseProps = Omit<StrapiPostAndSettings, 'contentPage'> & Get_Page_Content_TextQuery;

export const loadPosts = async (
    variables: TLoadPostsVariables = { start: 0, limit: 6 },
): Promise<StrapiPostAndSettings> => {
    const response = await client.query<TLoadPostsResponseProps>({
        query: Get_Posts_And_Settings_And_Content_TextDocument,
        variables: {
            ...defaultLoadPostsVariables,
            ...variables,
        },
    });
    const data = {
        posts: response.data.posts,
        setting: response.data.setting,
        variables: response.data.variables,
        contentPage: {
            footer: response.data.footer,
        },
    } as StrapiPostAndSettings;
    return data;
};
