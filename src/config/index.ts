const env = process.env.NODE_ENV;
let url_query = '';
if (env == 'development') {
    url_query = 'https://strapi-blog-guileoni.herokuapp.com/graphql';
} else {
    url_query = 'https://strapi-blog-guileoni.herokuapp.com/graphql';
}
const config = {
    graphql_URL: url_query,
};
export { config };
