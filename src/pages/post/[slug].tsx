import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts, StrapiPostAndSettings, TLoadPostsVariables } from '../../api/loadPosts';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { PostTemplate } from '../../templates/PostTemplate';

type TPostStaticProps = StrapiPostAndSettings & {
    setting: {
        data: TSettingsStrapi;
    };
    posts: {
        data: TPostStrapi[];
    };
    variables?: TLoadPostsVariables;
    posts_related?: { data: TPostStrapi[] };
};

export default function PostPage({ posts, setting, posts_related }: TPostStaticProps) {
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
            <PostTemplate post={posts.data[0]} settings={setting} posts_related={posts_related} />
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

export const getStaticProps: GetStaticProps<TPostStaticProps> = async (context) => {
    let data = null;
    let posts_related = null;
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
    } else {
        try {
            posts_related = await loadPosts({
                categorySlug: { contains: data.posts.data[0].attributes.categories.data[0].attributes.slug },
                limit: 6,
            });
            console.log(posts_related);
        } catch (error) {
            console.log(error);
            posts_related = null;
        }
    }
    return {
        props: {
            posts: data.posts,
            setting: data.setting,
            posts_related: posts_related?.posts,
        },
        revalidate: 24 * 60,
    };
};
