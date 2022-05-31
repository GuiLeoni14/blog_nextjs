import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/loadPosts';
import { PostTemplate } from '../../templates/PostTemplate';

export default function PostPage({ posts, setting }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) return <p>Carregando...</p>;
    return (
        <>
            <Head>
                <title>
                    {posts.data[0].attributes.title} - {setting.data.attributes.blogName}
                </title>
                meta
                <meta name="description" content={posts.data[0].attributes.excerpt} />
            </Head>
            <PostTemplate post={posts.data[0]} settings={setting} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    let data: StrapiPostAndSettings | null = null;
    let paths: { params: { slug: string } }[] = [];
    try {
        data = await loadPosts();
        paths = data.posts.data.map((post) => ({ params: { slug: post.attributes.slug } }));
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts || !data.posts.data.length) {
        paths = [];
    }
    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (context) => {
    let data = null;
    try {
        if (context.params) {
            data = await loadPosts({ postSlug: { contains: context.params.slug as string } });
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
        },
        revalidate: 24 * 60,
    };
};
