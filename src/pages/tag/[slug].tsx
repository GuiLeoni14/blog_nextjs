import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { loadPosts } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables, SeoFragment } from '../../graphql/generated';
import { useMemo } from 'react';

export default function TagPage({ posts, setting }: GetPostsAndSettingsQuery) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;

    const tagName = useMemo(() => {
        return posts ? posts[0].tags.filter((tag) => tag.slug == router.query.slug)[0].name : '';
    }, [posts, router.query.slug]);

    if (router.isFallback) return <p>Carregando...</p>;
    const titleHead = `Tag: ${tagName} - ${setting?.blogName}`;
    // se vier setting undefined ele carrega os valores de seo vazios
    const SEO = {
        description: '',
        keywords: '',
        ...setting?.seo,
        title: titleHead,
    } as SeoFragment;
    return (
        <>
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
            variables = { where: { tags_every: { slug: context.params.slug as string } }, last: 6 };
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
