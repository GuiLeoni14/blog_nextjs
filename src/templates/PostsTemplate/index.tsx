import { useCallback, useEffect, useMemo, useState } from 'react';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';
import { PostNotFound } from '../../components/PostNotFound';
import { PostOrderByInput, SeoFragment, useGetPostsAndSettingsQuery } from '../../graphql/generated';
import { DefaultButton } from '../../components/DefaultButton';
import { toast } from 'react-toastify';
import Featured from '../../components/Featured';
import { TDefaultQueryProps } from '../../pages';
import { useRouter } from 'next/router';

export type TPostsTemplateProps = TDefaultQueryProps & {
    seo?: SeoFragment;
};
export function PostsTemplate({ setting, posts, seo, variables }: TPostsTemplateProps) {
    const router = useRouter();
    console.log(router.pathname);
    const [statePosts, setStatePosts] = useState(router.pathname == '/' ? posts.slice(5) : posts);
    const [skipPage, setSkipPage] = useState(router.pathname == '/' ? 8 : 3);
    const { data, loading } = useGetPostsAndSettingsQuery({
        variables: { ...variables, orderBy: PostOrderByInput.DateDesc, skip: skipPage, first: 3 },
    });

    // está variável controla para que não haja renderização de posts na primeira renderização, já que o data recebe novos valores
    const isNotRenderNewPosts = useMemo(() => {
        if (data && data.posts.length > 0) {
            return statePosts.slice(-1)[0].id === data.posts.slice(-1)[0].id ? true : false;
        }
        return false;
    }, [data, statePosts]);

    useEffect(() => {
        console.log('useEffect');
        if (data && data.posts.length > 0 && !isNotRenderNewPosts) {
            console.log(data.posts);
            setStatePosts((state) => [...state, ...data.posts]);
        }
    }, [data, isNotRenderNewPosts]);

    const handleMountNewPosts = useCallback(() => {
        if (data) {
            setSkipPage((state) => state + 3);
        }
        if (data && data.posts.length < 1) {
            toast.warning('Sem posts para carregar', {
                position: 'top-center',
            });
        }
    }, [data]);

    return (
        <BaseTemplate setting={setting} seo={seo}>
            <Featured posts={posts} />
            <S.Container>
                {statePosts.length > 0 ? (
                    <>
                        <h3>Posts</h3>
                        <PostGrid posts={statePosts} />
                    </>
                ) : (
                    <>{!loading && <PostNotFound />}</>
                )}
                {loading && <SkeletonCardPost />}
                {statePosts.length > 0 && (
                    <DefaultButton
                        onClickButton={handleMountNewPosts}
                        disabled={loading || (data && data?.posts.length < 3)}
                        isLoading={loading}
                    >
                        Carregar mais posts
                    </DefaultButton>
                )}
            </S.Container>
        </BaseTemplate>
    );
}
