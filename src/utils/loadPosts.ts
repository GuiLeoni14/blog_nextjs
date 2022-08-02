import { GetPostsAndSettingsDocument, GetPostsAndSettingsQuery } from '../graphql/generated';
import { client } from './apollo';

interface IVariablesQueryProps {
    last: number;
}
export const loadPosts = async (variables: IVariablesQueryProps): Promise<GetPostsAndSettingsQuery> => {
    const response = await client.query<GetPostsAndSettingsQuery>({
        query: GetPostsAndSettingsDocument,
        variables: {
            orderBy: 'publishedAt_DESC',
            ...variables,
        },
    });
    const data = {
        posts: response.data.posts,
        setting: response.data.setting,
    } as GetPostsAndSettingsQuery;
    return data;
};
