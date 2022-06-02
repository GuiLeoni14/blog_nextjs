import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loadPosts, TLoadPostsVariables } from '../../api/loadPosts';
import PostGrid from '../../components/PostGrid';
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
            console.log(error);
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
    return (
        <BaseTemplate settings={settings} posts={posts}>
            {statePost.length > 0 ? (
                <S.Container>
                    <h3>Posts</h3>
                    <PostGrid posts={statePost} />
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
