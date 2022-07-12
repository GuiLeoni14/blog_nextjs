import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '../config';

export const client = new ApolloClient({
    uri: `${config.graphql_URL}`,
    cache: new InMemoryCache(),
});
