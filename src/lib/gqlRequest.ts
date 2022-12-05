import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL_GRAPHQL}`);
// Set a single header
gqlClient.setHeader('authorization', `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`);
