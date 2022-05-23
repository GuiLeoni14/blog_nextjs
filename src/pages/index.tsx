import { GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { loadPosts, StrapiPostAndSettings } from '../api/loadPosts';
import { PostCard } from '../components/PostCard';

export default function Home({ posts, setting }: StrapiPostAndSettings) {
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            {posts.data.map((post) => (
                <PostCard
                    key={post.id}
                    excerpt={post.attributes.content}
                    id={post.id}
                    image={post.attributes.cover.data.attributes.url}
                    title={post.attributes.title}
                />
            ))}
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
