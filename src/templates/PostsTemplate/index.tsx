import { useCallback, useEffect, useState } from 'react';
import { loadPosts, StrapiPostAndSettings, TLoadPostsVariables, TMetaPagination } from '../../api/loadPosts';
import { Pagination, PaginationButton } from '../../components/Pagination/styles';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { useQuery } from '../../hooks/useQuery';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';

export type TPostsTemplateProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
    variables?: TLoadPostsVariables;
};

export function PostsTemplate({ settings, posts = [], variables }: TPostsTemplateProps) {
    const [pageIndex, setPageIndex] = useState(0);
    const { data, isLoading, isError } = useQuery<StrapiPostAndSettings>({ pageSize: 2, page: pageIndex + 1 });
    console.log(data);
    const [statePost, setStatePosts] = useState(posts);
    const [stateVariables, setStateVariables] = useState(variables || {});
    const [buttonDisable, setButtonDisable] = useState(false);
    const [noMorePosts, setNoMorePosts] = useState(false);
    const [loadingMorePosts, setLoadingMorePosts] = useState(false);
    const handleLoadMorePosts = async () => {
        setButtonDisable(true);
        const newVariables = {
            ...stateVariables,
            start: stateVariables.start! + stateVariables.limit!,
            limit: stateVariables.limit,
        };
        try {
            setLoadingMorePosts(true);
            const more_posts = await loadPosts(newVariables);
            if (!more_posts || !more_posts.posts || !more_posts.posts.data.length) {
                setNoMorePosts(true);
                return;
            }
            setStatePosts((p) => [...p, ...more_posts.posts.data]);
        } catch (error) {
            //console.log(error);
        } finally {
            setLoadingMorePosts(false);
            setButtonDisable(false);
            setStateVariables(newVariables);
        }
    };
    useEffect(() => {
        setStatePosts(posts);
        setNoMorePosts(false);
        setButtonDisable(false);
        setStateVariables(variables || {});
    }, [posts, variables]);
    const handleMountPostGrid = useCallback(() => {
        if (!data || !data.posts || data.posts.data.length < 1 || pageIndex < 1) {
            return <PostGrid posts={statePost} />;
        }
        return <PostGrid posts={data.posts.data} />;
    }, [statePost, pageIndex, data]);
    return (
        <BaseTemplate settings={settings} posts={posts}>
            {statePost.length > 0 ? (
                <S.Container>
                    <h3>Posts</h3>
                    {isLoading && pageIndex > 0 ? <SkeletonCardPost /> : handleMountPostGrid()}
                    <Pagination>
                        <PaginationButton onClick={() => setPageIndex((state) => state - 1)}>Previous</PaginationButton>
                        <PaginationButton onClick={() => setPageIndex((state) => state + 1)}>Next</PaginationButton>
                    </Pagination>
                    <S.ButtonMorePosts
                        onClick={handleLoadMorePosts}
                        disabled={buttonDisable || loadingMorePosts}
                        isLoading={loadingMorePosts}
                    >
                        {noMorePosts ? 'Sem posts para carregar' : 'Carregar mais'}
                        {loadingMorePosts && (
                            <img src="/images/loading.gif" width={25} height={25} className="image_loading" />
                        )}
                    </S.ButtonMorePosts>
                </S.Container>
            ) : (
                <p>nenhum post encontrado</p>
            )}
        </BaseTemplate>
    );
}
