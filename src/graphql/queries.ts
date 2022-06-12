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
        $start: Int
        $limit: Int
        $pageSize: Int
        $page: Int
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
            pagination: { start: $start, limit: $limit, pageSize: $pageSize, page: $page }
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
            meta {
                pagination {
                    ...pagination
                }
            }
        }
    }
`;

export const GRAPHQL_CATEGORIES_QUERY = gql`
    fragment image on UploadFile {
        alternativeText
        url
    }
    fragment coverCategory on Category {
        cover {
            data {
                id
                attributes {
                    ...image
                }
            }
        }
    }
    fragment category on Category {
        name
        slug
        ...coverCategory
    }
    query GET_CATEGORIES($sort: [String] = "createdAt:desc", $start: Int, $limit: Int, $pageSize: Int, $page: Int) {
        categories(pagination: { start: $start, limit: $limit, pageSize: $pageSize, page: $page }, sort: $sort) {
            data {
                id
                attributes {
                    ...category
                }
            }
        }
    }
`;

export const GRAPHQL_AUTHORS_QUERY = gql`
    query GET_AUTHORS($sort: [String] = "createdAt:desc", $start: Int, $limit: Int, $pageSize: Int, $page: Int) {
        autors(pagination: { start: $start, limit: $limit, pageSize: $pageSize, page: $page }, sort: $sort) {
            data {
                id
                attributes {
                    ...author
                }
            }
        }
    }
`;
