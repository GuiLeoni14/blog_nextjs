import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../api/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';
export default function Home({ posts, setting }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) {
        return <p>loading..</p>;
    }
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            <PostsTemplate posts={posts.data} settings={setting} />
        </>
    );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
    let data = null;
    try {
        data = await loadPosts();
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
        },
        revalidate: 24 * 60,
    };
};
