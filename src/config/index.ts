const env = process.env.NODE_ENV;
let url_query = '';
if (env == 'development') {
    url_query = 'https://localhost:1337/graphql';
} else {
    url_query = 'https://blog-strapi-nextjs.herokuapp.com/graphql';
}
const config = {
    graphql_URL: url_query,
};
export { config };
