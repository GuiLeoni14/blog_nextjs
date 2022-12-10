import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '../../lib/gqlRequest';
import { GetPostsDocument, GetPostsQuery, GetPostsQueryVariables } from './../../graphql/generated';

interface UsePostsParams {
  params?: GetPostsQueryVariables;
  identifier: string | string[];
  options?: any;
}

export const getPosts = async (params?: GetPostsQueryVariables) => {
  const response = await gqlClient.request<GetPostsQuery>(GetPostsDocument, params);
  return response;
};

export const usePosts = ({ params, identifier, options }: UsePostsParams) => {
  return useQuery(['posts', identifier], () => getPosts(params), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
};
