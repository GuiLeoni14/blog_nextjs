import {
    GetPostsAndSettingsDocument,
    GetPostsAndSettingsQuery,
    GetPostsAndSettingsQueryVariables,
    PostOrderByInput,
} from '../graphql/generated';
import { client } from '../lib/apollo';

export const defaultVariablesRequestApi: GetPostsAndSettingsQueryVariables = {
    orderBy: PostOrderByInput.PublishedAtDesc,
    last: 6,
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
