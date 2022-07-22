import { GetServerSideProps } from 'next';
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

export default function SearchPage({ posts, setting, variables, contentPage }: StrapiPostAndSettings) {
    const router = useRouter();
    if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
    const titleHead = `Pesquisa: ${router.query.q} - ${setting.data.attributes.blogName}`;
    return (
        <>
            <Head>
                <title>{titleHead}</title>
            </Head>
            <PostsTemplate contentPage={contentPage} posts={posts} setting={setting} variables={variables} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<StrapiPostAndSettings> = async (context) => {
    let data = null;
    let variables = {} as TLoadPostsVariables;
    const query = context.query.q || '';
    if (!query)
        return {
            notFound: true,
        };
    try {
        variables = { postSearch: { contains: query as string }, limit: 6 };
        data = await loadPosts(variables);
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
            variables: {
                ...defaultLoadPostsVariables,
                ...variables,
            },
        },
    };
};
