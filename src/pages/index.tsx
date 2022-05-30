import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../api/loadPosts';
import { useBlogTheme } from '../hooks/useBlogTheme';
import { PostsTemplate } from '../templates/PostsTemplate';
export default function Home({ posts, setting, variables }: StrapiPostAndSettings) {
    const router = useRouter();
    const { toggleTheme } = useBlogTheme();
    if (router.isFallback) {
        return <p>loading..</p>;
    }
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            <button onClick={toggleTheme}>Alterar tema</button>
            <PostsTemplate posts={posts.data} settings={setting} variables={variables} />
        </>
    );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
    let data = null;
    try {
        data = await loadPosts({ limit: 1 });
    } catch (error) {
        console.log(error);
        data = null;
    }
    console.log(data);
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
            },
        },
        revalidate: 24 * 60,
    };
};
