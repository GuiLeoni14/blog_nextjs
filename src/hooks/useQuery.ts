import useSWR from 'swr';
import { request } from 'graphql-request';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { config } from '../config';
import {} from '../utils/loadPosts';
import { GetPostsAndSettingsQueryVariables } from '../graphql/generated';

export type TUseQueryProps = {
    variables?: GetPostsAndSettingsQueryVariables;
    query?: string;
};

const fetcher = (query: string, variables: GetPostsAndSettingsQueryVariables = {}) =>
    request(config.graphql_URL, query, {
        ...variables,
    });

export function useQuery<Data = any, Error = any>({ variables = {}, query = GRAPHQL_QUERY }: TUseQueryProps) {
    const { data, error } = useSWR<Data, Error>([query, variables], fetcher);
    //console.log(error);
    return { data, error, isLoading: !error && !data, isError: error };
}
