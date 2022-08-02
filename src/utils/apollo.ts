import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    link: createHttpLink({
        uri: `${process.env.NEXT_API_URL}`,
        credentials: 'same-origin',
        headers: {
            authorization: process.env.NEXT_API_TOKEN,
        },
    }),
    cache: new InMemoryCache(),
});
