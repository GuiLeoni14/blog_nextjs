import { useQuery } from '@tanstack/react-query';
import { GetCategoriesDocument, GetCategoriesQuery, GetCategoriesQueryVariables } from '../../graphql/generated';
import { gqlClient } from '../../lib/gqlRequest';

interface UsePostsParams {
  params?: GetCategoriesQueryVariables;
  identifier: string | string[];
  options?: any;
}

export const getCategories = async (params?: GetCategoriesQueryVariables) => {
  const response = await gqlClient.request<GetCategoriesQuery>(GetCategoriesDocument, params);
  return response;
};

export const useCategories = ({ params, identifier, options }: UsePostsParams) => {
  return useQuery(['Categories', identifier], () => getCategories(params), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
};
