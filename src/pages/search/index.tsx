import Head from 'next/head';
import { useRouter } from 'next/router';
import { SkeletonCardPost } from '../../components/Skeleton';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage() {
  const router = useRouter();
  const titleHead = `Pesquisa: ${router.query.q}`;
  const search = (router.query.q || '') as string;

  const variables = {
    where: {
      OR: [
        { excerpt_contains: search },
        { title_contains: search },
        { categories_some: { slug: search } },
        { tags_some: { slug: search } },
      ],
    },
  };

  if (router.isFallback) return <SkeletonCardPost pageTypeSkeleton="TEMPLATE_POST" />;
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <PostsTemplate posts={[]} variables={variables} />
    </>
  );
}
