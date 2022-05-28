import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function TagPage({ posts, setting }: StrapiPostAndSettings) {
    const router = useRouter();
    let tagName = '';
    if (posts) {
        tagName = posts.data[0].attributes.tags.data.filter((tag) => tag.attributes.slug === router.query.slug)[0]
            .attributes.name;
    }
    if (router.isFallback) return <p>Carregando...</p>;
    return (
        <>
            <Head>
                <title>
                    Tag: {tagName} - {setting.data.attributes.blogName}
                </title>
            </Head>
            <PostsTemplate posts={posts.data} settings={setting} />
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
    try {
        if (context.params) {
            data = await loadPosts({ tagSlug: { contains: context.params.slug as string } });
        }
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
        revalidate: 24 * 60,
    };
};
