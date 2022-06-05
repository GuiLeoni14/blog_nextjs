import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { useMemo } from 'react';
import { SkeletonCardPost } from '../../components/Skeleton';

export default function CategoryPage({ posts, setting, variables }: StrapiPostAndSettings) {
    const router = useRouter();
    let categoryName = '';
    categoryName = useMemo(() => {
        if (posts) {
            return posts.data[0].attributes.categories.data.filter(
                (category) => category.attributes.slug == router.query.slug,
            )[0].attributes.name;
        }
        return '';
    }, [posts, router.query.slug]);

    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    return (
        <>
            <Head>
                <title>
                    Category: {categoryName} - {setting.data.attributes.blogName}
                </title>
            </Head>
            <PostsTemplate posts={posts} setting={setting} variables={variables} />
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
            variables = { categorySlug: { contains: context.params.slug as string } };
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
