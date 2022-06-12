import useSWR from 'swr';
import { request } from 'graphql-request';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { config } from '../config';
import { defaultLoadPostsVariables, TLoadPostsVariables } from '../utils/loadPosts';

export type TUseQueryProps = {
    variables?: TLoadPostsVariables;
    query?: string;
};

const fetcher = (query: string, variables: TLoadPostsVariables = {}) =>
    request(config.graphql_URL, query, {
        ...defaultLoadPostsVariables,
        ...variables,
    });

export function useQuery<Data = any, Error = any>({ variables = {}, query = GRAPHQL_QUERY }: TUseQueryProps) {
    const { data, error } = useSWR<Data, Error>([query, variables], fetcher);
    //console.log(error);
    return { data, error, isLoading: !error && !data, isError: error };
}
