import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../../api/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function AuthorPage({ posts, setting, variables }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) return <p>Carregando...</p>;
    return (
        <>
            <Head>
                <title>
                    Author: {posts.data[0].attributes.autor.data.attributes.name} - {setting.data.attributes.blogName}
                </title>
            </Head>
            <PostsTemplate posts={posts.data} settings={setting} variables={variables} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (context) => {
    let data = null;
    let variables = {};
    try {
        if (context.params) {
            variables = { authorSlug: { contains: context.params.slug as string } };
            data = await loadPosts(variables);
        }
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts || !data.posts.data.length) {
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
        revalidate: 24 * 60,
    };
};
