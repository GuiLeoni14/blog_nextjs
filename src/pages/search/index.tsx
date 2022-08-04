import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPosts } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables, SeoFragment } from '../../graphql/generated';

export default function SearchPage({ posts, setting }: GetPostsAndSettingsQuery) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    const titleHead = `Pesquisa: ${router.query.q} - ${setting?.blogName}`;
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

export const getServerSideProps: GetServerSideProps<GetPostsAndSettingsQuery> = async (context) => {
    let data = null;
    let variables = {} as GetPostsAndSettingsQueryVariables;
    const search = (context.query.q || '') as string;
    if (!search)
        return {
            notFound: true,
        };
    try {
        variables = {
            where: {
                OR: [
                    { excerpt_contains: search },
                    { title_contains: search },
                    { categories_every: { slug: search } },
                    { tags_every: { slug: search } },
                ],
            },
            last: 6,
        };
        data = await loadPosts({ ...variables });
    } catch (error) {
        data = null;
    }
    if (!data || !data.posts) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            ...data,
        },
    };
};
