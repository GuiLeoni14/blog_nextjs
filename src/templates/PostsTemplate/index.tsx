import { useCallback, useEffect, useState } from 'react';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';
import { PostNotFound } from '../../components/PostNotFound';
import { PostEdge, PostOrderByInput, SeoFragment, useGetPostsPaginationQuery } from '../../graphql/generated';
import { DefaultButton } from '../../components/DefaultButton';
import { toast } from 'react-toastify';
import Featured from '../../components/Featured';
import { TDefaultQueryProps } from '../../pages';

export type TPostsTemplateProps = TDefaultQueryProps & {
    seo?: SeoFragment;
};
export function PostsTemplate({ setting, posts, seo, variables }: TPostsTemplateProps) {
    const [statePosts, setStatePosts] = useState([] as PostEdge[]);
    const [skipPage, setSkipPage] = useState(5);
    const { data, loading } = useGetPostsPaginationQuery({
        variables: { ...variables, orderBy: PostOrderByInput.DateDesc, skip: skipPage, first: 3 },
    });
    useEffect(() => {
        if (data && data.postsConnection.edges.length > 0) {
            console.log(data.postsConnection.edges);
            setStatePosts((state) => [...state, ...(data.postsConnection.edges as PostEdge[])]);
        }
    }, [data]);
    const handleMountNewPosts = useCallback(() => {
        if (data) {
            setSkipPage((state) => state + 3);
        }
        if (data && data.postsConnection.edges.length < 1) {
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
                <DefaultButton
                    onClickButton={handleMountNewPosts}
                    disabled={(data && !data.postsConnection.pageInfo.hasNextPage) || loading}
                    isLoading={loading}
                >
                    Carregar mais posts
                </DefaultButton>
            </S.Container>
        </BaseTemplate>
    );
}
