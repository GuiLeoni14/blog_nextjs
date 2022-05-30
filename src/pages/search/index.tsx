import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../../api/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({ posts, setting, variables }: StrapiPostAndSettings) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>
                    Pesquisa: {router.query.q} - {setting.data.attributes.blogName}
                </title>
            </Head>
            <PostsTemplate posts={posts.data} settings={setting} variables={variables} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<StrapiPostAndSettings> = async (context) => {
    let data = null;
    let variables = {};
    const query = context.query.q || '';
    if (!query)
        return {
            notFound: true,
        };
    try {
        variables = { postSearch: { contains: query as string } };
        data = await loadPosts(variables);
    } catch (error) {
        console.log(error);
        data = null;
    }
    if (!data || !data.posts) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            posts: data.posts,
            setting: data.setting,
            variables: {
                ...defaultLoadPostsVariables,
                ...variables,
            },
        },
    };
};