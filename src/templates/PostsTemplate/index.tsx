import { useCallback, useRef } from 'react';
import { Pagination } from '../../components/Pagination';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';
import { usePagination } from '../../hooks/usePagination';
import { StrapiPostAndSettings } from '../../utils/loadPosts';
import { PostNotFound } from '../../components/PostNotFound';

export function PostsTemplate({ setting, posts, contentPage }: StrapiPostAndSettings) {
    const { actualPage, data, isLoading } = usePagination();
    const statePost = useRef(posts.data || []);
    const handleMountPostGrid = useCallback(() => {
        if (!data || !data.posts || data.posts.data.length < 1 || actualPage < 1) {
            return <PostGrid posts={statePost.current} />;
        }
        return <PostGrid posts={data.posts.data} />;
    }, [statePost, data, actualPage]);
    return (
        <BaseTemplate setting={setting} contentPage={contentPage} posts={posts.data}>
            {statePost.current.length > 0 ? (
                <S.Container>
                    <h3>Posts</h3>
                    {isLoading && actualPage > 0 ? <SkeletonCardPost /> : handleMountPostGrid()}
                    <Pagination {...posts.meta} />
                </S.Container>
            ) : (
                <PostNotFound />
            )}
        </BaseTemplate>
    );
}
