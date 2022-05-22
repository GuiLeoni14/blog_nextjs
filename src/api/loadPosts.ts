import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
export type TLoadPostsVariables = {
    categorySlug?: string;
    postSlug?: string;
    postSearch?: string;
    authorSlug?: string;
    tagSlug?: string;
    sort?: string[];
    start?: number;
    limit?: number;
};

export const loadPosts = async (variables: TLoadPostsVariables = {}) => {
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
