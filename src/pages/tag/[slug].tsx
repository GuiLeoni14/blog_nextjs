import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
    defaultLoadPostsVariables,
    loadPosts,
    StrapiPostAndSettings,
    TLoadPostsVariables,
} from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { SkeletonCardPost } from '../../components/Skeleton';

export default function TagPage({ posts, setting, variables }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    let tagName = '';
    if (posts) {
        tagName = posts.data[0].attributes.tags.data.filter((tag) => tag.attributes.slug === router.query.slug)[0]
            .attributes.name;
    }
    if (router.isFallback) return <p>Carregando...</p>;
    const titleHead = `Tag: ${tagName} - ${setting.data.attributes.blogName}`;
    return (
        <>
            <Head>
                <title>{titleHead}</title>
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
    let variables = {} as TLoadPostsVariables;
    try {
        if (context.params) {
            variables = { tagSlug: { contains: context.params.slug as string }, limit: 6 };
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
