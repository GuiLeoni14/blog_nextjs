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

export default function AuthorPage({ posts, setting, variables, contentPage }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    const titleHead = `Author: ${posts.data[0].attributes.autor.data.attributes.name} - ${setting.data.attributes.blogName}`;
    return (
        <>
            <Head>
                <title>{titleHead}</title>
            </Head>
            <PostsTemplate contentPage={contentPage} posts={posts} setting={setting} variables={variables} />
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
            variables = { authorSlug: { contains: context.params.slug as string }, limit: 6 };
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
            ...data,
            variables: {
                ...defaultLoadPostsVariables,
                ...variables,
            },
        },
        revalidate: 10 * 60 * 1000,
    };
};
