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
    console.log(variables);
    const handleLoadMorePosts = async () => {
        setButtonDisable(true);
        const newVariables = {
            ...stateVariables,
            start: stateVariables.start! + stateVariables.limit!,
            limit: stateVariables.limit,
        };
        const more_posts = await loadPosts(newVariables);
        if (!more_posts || !more_posts.posts || !more_posts.posts.data.length) {
            setNoMorePosts(true);
            return;
        }
        setButtonDisable(false);
        setStateVariables(newVariables);
        setStatePosts((p) => [...p, ...more_posts.posts.data]);
    };
    useEffect(() => {
        setStatePosts(posts);
        setNoMorePosts(false);
        setButtonDisable(false);
        setStateVariables(variables || {});
    }, [posts, variables]);
    return (
        <BaseTemplate settings={settings}>
            {statePost.length > 0 ? (
                <>
                    <PostGrid posts={statePost} />
                    <S.ButtonMorePosts onClick={handleLoadMorePosts} disabled={buttonDisable}>
                        {noMorePosts ? 'Sem posts para carregar' : 'Carregar mais'}
                    </S.ButtonMorePosts>
                </>
            ) : (
                <p>nenhum post encontrado</p>
            )}
        </BaseTemplate>
    );
}
