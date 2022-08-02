import {
    GetPostsAndSettingsDocument,
    GetPostsAndSettingsQuery,
    GetPostsAndSettingsQueryVariables,
    PostOrderByInput,
} from '../graphql/generated';
import { client } from './apollo';

export const defaultVariablesRequestApi: GetPostsAndSettingsQueryVariables = {
    orderBy: PostOrderByInput.PublishedAtDesc,
    settingID: process.env.SETTINGS_API_ID,
};
export const loadPosts = async (variables: GetPostsAndSettingsQueryVariables): Promise<GetPostsAndSettingsQuery> => {
    console.log(defaultVariablesRequestApi);
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
