import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
    ${GRAPHQL_FRAGMENTS}
    query GET_POSTS(
        $categorySlug: StringFilterInput
        $postSlug: StringFilterInput
        $postSearch: StringFilterInput
        $authorSlug: StringFilterInput
        $tagSlug: StringFilterInput
        $sort: [String] = "createdAt:desc"
        $start: Int = 0
        $limit: Int = 10
    ) {
        setting {
            data {
                id
                attributes {
                    ...settings
                }
            }
        }
        posts(
            pagination: { start: $start, limit: $limit }
            sort: $sort
            filters: {
                slug: $postSlug
                or: [{ title: $postSearch }, { content: $postSearch }, { excerpt: $postSearch }]
                categories: { slug: $categorySlug }
                autor: { slug: $authorSlug }
                tags: { slug: $tagSlug }
            }
        ) {
            data {
                id
                attributes {
                    ...post
                }
            }
        }
    }
`;
