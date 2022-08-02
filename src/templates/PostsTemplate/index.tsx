import { useCallback, useRef } from 'react';
import { Pagination } from '../../components/Pagination';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';
import { usePagination } from '../../hooks/usePagination';
import { PostNotFound } from '../../components/PostNotFound';
import { GetPostsAndSettingsQuery } from '../../graphql/generated';

export function PostsTemplate({ setting, posts }: GetPostsAndSettingsQuery) {
    const { actualPage, data, isLoading } = usePagination();
    const statePost = useRef(posts || []);
    const handleMountPostGrid = useCallback(() => {
        if (!data || !data.posts || data.posts.data.length < 1 || actualPage < 1) {
            return <PostGrid posts={statePost.current} />;
        }
        return <PostGrid posts={data.posts.data} />;
    }, [statePost, data, actualPage]);
    return (
        <BaseTemplate setting={setting} posts={posts}>
            {statePost.current.length > 0 ? (
                <S.Container>
                    <h3>Posts</h3>
                    {isLoading && actualPage > 0 ? <SkeletonCardPost /> : handleMountPostGrid()}
                    <Pagination pagination={{ pageCount: 1 }} />
                </S.Container>
            ) : (
                <PostNotFound />
            )}
        </BaseTemplate>
    );
}
