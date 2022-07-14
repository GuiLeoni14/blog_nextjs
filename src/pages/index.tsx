import { GetStaticProps } from 'next';
import Head from 'next/head';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../utils/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';
import { loadPageContentText } from '../utils/loadPageContentText';
export default function Home({ posts, setting, variables, contentPageText }: StrapiPostAndSettings) {
    return (
        <>
            <Head>
                <title>{setting.data.attributes.blogName}</title>
                <meta name="description" content={setting.data.attributes.blogDescription} />
            </Head>
            <PostsTemplate posts={posts} setting={setting} variables={variables} contentPageText={contentPageText} />
        </>
    );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
    let data = null;
    let contentPageText = null;
    try {
        data = await loadPosts({ limit: 6 });
        contentPageText = await loadPageContentText();
    } catch (error) {
        data = null;
        contentPageText = null;
    }
    if (!data || !data.posts || !data.posts.data.length || !contentPageText) {
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
            },
            contentPageText,
        },
        revalidate: 24 * 60,
    };
};
