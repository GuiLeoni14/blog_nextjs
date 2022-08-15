import { GetStaticProps } from 'next';
import { loadPostsSrr } from '../utils/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables, SeoFragment } from '../graphql/generated';

export type TDefaultQueryProps = GetPostsAndSettingsQuery & {
    variables?: GetPostsAndSettingsQueryVariables;
};

export default function Home({ posts, setting }: TDefaultQueryProps) {
    const SEO = setting?.seo as SeoFragment;
    return (
        <>
            <PostsTemplate posts={posts} setting={setting} seo={SEO} />
        </>
    );
}

export const getStaticProps: GetStaticProps<GetPostsAndSettingsQuery> = async () => {
    let data = null;
    try {
        data = await loadPostsSrr({ first: 6 });
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
