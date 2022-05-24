import { GetStaticProps } from 'next';
import Head from 'next/head';
import { loadPosts, StrapiPostAndSettings } from '../api/loadPosts';
import PostGrid from '../components/PostGrid';

export default function Home({ posts, setting }: StrapiPostAndSettings) {
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            <PostGrid posts={posts.data} />
        </>
    );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
    let data = null;
    try {
        data = await loadPosts();
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
        },
        revalidate: 24 * 60,
    };
};
