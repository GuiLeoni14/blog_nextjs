import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '../../lib/gqlRequest';
import { GetAuthorsDocument, GetAuthorsQuery, GetAuthorsQueryVariables } from './../../graphql/generated';

interface UsePostsParams {
  params?: GetAuthorsQueryVariables;
  identifier: string | string[];
  options?: any;
}

export const getAuthors = async (params?: GetAuthorsQueryVariables) => {
  const response = await gqlClient.request<GetAuthorsQuery>(GetAuthorsDocument, params);
  return response;
};

export const useAuthors = ({ params, identifier, options }: UsePostsParams) => {
  return useQuery(['authors', identifier], () => getAuthors(params), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
};
