import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    link: createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL_GRAPHQL}`,
        credentials: 'same-origin',
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
    }),
    cache: new InMemoryCache(),
});
