import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';
import { loadPosts, StrapiPostAndSettings } from '../api/loadPosts';
import CardPost from '../components/CardPost';

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

export default function Home({ posts, setting }: StrapiPostAndSettings) {
    useEffect(() => {
        loadPosts({ categorySlug: { contains: 'java-script' } }).then((response) => console.log(response));
    }, []);
    console.log(posts);
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            {posts.data.map((post) => (
                <CardPost
                    key={post.id}
                    content={post.attributes.content}
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
        console.log('try', data.posts.data);
    } catch (error) {
        console.log(error);
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
    };
};
