import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { useMemo } from 'react';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables } from '../../graphql/generated';
export default function CategoryPage({ posts, setting }: GetPostsAndSettingsQuery) {
    const router = useRouter();
    const categoryName = useMemo(() => {
        return posts ? posts[0].categories.filter((category) => category.slug == router.query.slug)[0].name : '';
    }, [posts, router.query.slug]);

    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    const titleHead = `Category: ${categoryName} - ${setting?.blogName}`;
    return (
        <>
            <Head>
                <title>{titleHead}</title>
            </Head>
            <PostsTemplate posts={posts} setting={setting} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<GetPostsAndSettingsQuery> = async (context) => {
    let data = null;
    let variables = {} as GetPostsAndSettingsQueryVariables;
    try {
        if (context.params) {
            variables = { where: { categories_every: { slug: context.params.slug as string } }, last: 6 };
            data = await loadPosts({
                ...variables,
            });
        }
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts || !data.posts.length) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            ...data,
        },
        revalidate: 10 * 60 * 1000,
    };
};
