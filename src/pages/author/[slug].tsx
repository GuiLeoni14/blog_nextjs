import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables, SeoFragment } from '../../graphql/generated';

export default function AuthorPage({ posts, setting }: GetPostsAndSettingsQuery) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    const titleHead = `Author: ${posts[0].author?.name} - ${setting?.blogName}`;
    const SEO = {
        description: '',
        keywords: '',
        ...setting?.seo,
        title: titleHead,
    } as SeoFragment;
    return (
        <>
            <Head>
                <title>{titleHead}</title>
            </Head>
            <PostsTemplate posts={posts} setting={setting} seo={SEO} />
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
            variables = { where: { author: { slug: context.params.slug as string } }, first: 6 };
            data = await loadPosts(variables);
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
