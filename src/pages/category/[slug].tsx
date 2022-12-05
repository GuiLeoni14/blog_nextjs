import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { loadPostsSrr } from '../../utils/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { useMemo } from 'react';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsAndSettingsQueryVariables, SeoFragment } from '../../graphql/generated';
import { TDefaultQueryProps } from '..';
export default function CategoryPage({ posts, setting, variables }: TDefaultQueryProps) {
  const router = useRouter();
  const categoryName = useMemo(() => {
    return posts ? posts[0].categories.filter((category) => category.slug == router.query.slug)[0].name : '';
  }, [posts, router.query.slug]);

  if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
  const titleHead = `Category: ${categoryName} - ${setting?.blogName}`;
  const SEO = {
    description: '',
    keywords: '',
    ...setting?.seo,
    title: titleHead,
  } as SeoFragment;
  return (
    <>
      <PostsTemplate posts={posts} setting={setting} seo={SEO} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TDefaultQueryProps> = async (context) => {
  let data = null;
  let variables = {} as GetPostsAndSettingsQueryVariables;
  try {
    if (context.params) {
      variables = { where: { categories_some: { slug: context.params.slug as string } }, first: 6 };
      data = await loadPostsSrr({
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
      variables,
    },
    revalidate: 10 * 60 * 1000,
  };
};
