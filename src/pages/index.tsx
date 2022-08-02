import { GetStaticProps } from 'next';
import { loadPosts } from '../utils/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';
import { GetPostsAndSettingsQuery } from '../graphql/generated';
export default function Home({ posts, setting }: GetPostsAndSettingsQuery) {
    return (
        <>
            <PostsTemplate posts={posts} setting={setting} />
        </>
    );
}

export const getStaticProps: GetStaticProps<GetPostsAndSettingsQuery> = async () => {
    let data = null;
    try {
        data = await loadPosts({ last: 6 });
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
