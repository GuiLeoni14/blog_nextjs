import {
    GetPostsAndSettingsDocument,
    GetPostsAndSettingsQuery,
    GetPostsAndSettingsQueryVariables,
    PostOrderByInput,
} from '../graphql/generated';
import { client } from '../lib/apollo';
import { gqlClient } from '../lib/gqlRequest';

export const defaultVariablesRequestApi: GetPostsAndSettingsQueryVariables = {
    orderBy: PostOrderByInput.DateDesc,
    skip: 0,
    settingID: process.env.NEXT_PUBLIC_SETTINGS_API_ID,
};
export const loadPosts = async (variables: GetPostsAndSettingsQueryVariables): Promise<GetPostsAndSettingsQuery> => {
    const response = await client.query<GetPostsAndSettingsQuery>({
        query: GetPostsAndSettingsDocument,
        variables: {
            ...defaultVariablesRequestApi,
            ...variables,
        },
    });
    const data = {
        posts: response.data.posts,
        setting: response.data.setting,
    } as GetPostsAndSettingsQuery;
    return data;
};

export const loadPostsSrr = async (variables: GetPostsAndSettingsQueryVariables) => {
    const data = await gqlClient.request(GetPostsAndSettingsDocument, {
        ...defaultVariablesRequestApi,
        ...variables,
    });
    return data;
};
