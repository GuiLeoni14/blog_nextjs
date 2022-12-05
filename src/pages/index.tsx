import { GetStaticProps } from 'next';
import { GetPostsAndSettingsQuery, GetPostsAndSettingsQueryVariables, SeoFragment } from '../graphql/generated';
import { PostsTemplate } from '../templates/PostsTemplate';
import { loadPostsSrr } from '../utils/loadPosts';

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
    data = await loadPostsSrr({ first: 11 });
  } catch (error) {
    data = null;
  }
  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  return {
    props: {
      ...data,
    },
    revalidate: 10 * 60 * 1000,
  };
};
