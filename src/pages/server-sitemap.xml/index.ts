import { GetServerSidePropsContext } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { loadPostsSrr } from './../../utils/loadPosts';

//eslint-disable-next-line
export default async function SiteMap() {}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const response = await loadPostsSrr({
    first: 10,
  });

  const fields: ISitemapField[] = response.posts.map((post) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};
