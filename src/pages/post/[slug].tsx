import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PostTemplate } from '../../templates/PostTemplate';
import { SkeletonCardPost } from '../../components/Skeleton';
import { client } from '../../lib/apollo';
import { GetPostsAndSettingsQuery, GetPostsDocument, GetPostsQuery, PostFragment } from '../../graphql/generated';
import { loadPosts } from '../../utils/loadPosts';

export type TPostStaticProps = GetPostsAndSettingsQuery & {
    posts_related?: PostFragment[];
};

export default function PostPage({ posts, posts_related, setting }: TPostStaticProps) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    return (
        <>
            <PostTemplate posts={posts} setting={setting} posts_related={posts_related} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    let data: GetPostsQuery | null = null;
    let paths: { params: { slug: string } }[] = [];
    try {
        const response = await client.query<GetPostsQuery>({
            query: GetPostsDocument,
        });
        data = response.data;
        paths = response.data.posts.map((post) => ({ params: { slug: post.slug } }));
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts || !data.posts.length) {
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
            const response = await loadPosts({ where: { slug: context.params.slug as string } });
            data = response;
        }
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts || !data.posts.length) {
        return {
            notFound: true,
        };
    } else {
        try {
            posts_related = await loadPosts({
                where: { categories_every: { slug: data.posts[0].categories[0].slug } },
            });
        } catch (error) {
            posts_related = null;
        }
    }
    return {
        props: {
            ...data,
            posts_related: posts_related?.posts || [],
        },
        revalidate: 10 * 60 * 1000,
    };
};
