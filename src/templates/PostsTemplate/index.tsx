import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Featured from '../../components/Featured';
import PostGrid from '../../components/PostGrid';
import { PostNotFound } from '../../components/PostNotFound';
import { SkeletonCardPost } from '../../components/Skeleton';
import { GetPostsQuery, SeoFragment } from '../../graphql/generated';
import { usePosts } from '../../hooks/fetch/usePosts';
import { TDefaultQueryProps } from '../../pages';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';

export type TPostsTemplateProps = TDefaultQueryProps & {
  seo?: SeoFragment;
};

export function PostsTemplate({ setting, posts, seo, variables }: TPostsTemplateProps) {
  const loaderNewPostsObserverRef = useRef<null | HTMLDivElement>(null);
  const [skipPage, setSkipPage] = useState(0);

  const router = useRouter();
  const searchQuery = router.query.q ?? null;
  const keyReactQuery = searchQuery ? searchQuery : router.asPath;
  const [postsGrid, setPostsGrid] = useState<GetPostsQuery['posts']>([]);

  const { data, isLoading } = usePosts({
    params: {
      skip: skipPage,
      first: 3,
      ...variables,
    },
    identifier: [String(skipPage), String(keyReactQuery)],
  });

  const isNotRenderNewPosts = data ? data.posts.length < 1 : false;

  const handleMountNewPosts = useCallback(
    async (entries: IntersectionObserverEntryInit[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (data) {
          setSkipPage((state) => state + 3);
        }
        if (data && data.posts.length < 1) {
          toast.warning('Sem posts para carregar', {
            position: 'top-center',
          });
        }
      }
    },
    [data],
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleMountNewPosts, option);
    if (loaderNewPostsObserverRef.current) observer.observe(loaderNewPostsObserverRef.current);
  }, [handleMountNewPosts]);

  useEffect(() => {
    if (data && data.posts.length > 0) {
      setPostsGrid((state) => [...state, ...data.posts]);
    }
  }, [data]);

  return (
    <BaseTemplate setting={setting} seo={seo}>
      <Featured posts={posts} />
      <S.Container>
        <>
          <h3>Posts</h3>
          {postsGrid ? <PostGrid posts={postsGrid} /> : <>{!isLoading && <PostNotFound />}</>}
          {isLoading && <SkeletonCardPost />}
        </>
        <S.ObservableContent close={isNotRenderNewPosts || isLoading} ref={loaderNewPostsObserverRef} />
      </S.Container>
    </BaseTemplate>
  );
}
