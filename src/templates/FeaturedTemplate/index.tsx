import { useEffect, useState } from 'react';
import { loadPosts, TLoadPostsVariables } from '../../api/loadPosts';
import { PostCardFeatured } from '../../components/PostCardFeatured';
import { PostFeatured } from '../../components/PostFeatured';
import PostGrid from '../../components/PostGrid';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TFeaturedProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
    variables?: TLoadPostsVariables;
};

export function Featured({ settings, posts = [], variables }: TFeaturedProps) {
    const statePostCardFeatured = posts.slice(1, 4);
    if (posts.length < 1) return null;
    return (
        <BaseTemplate settings={settings}>
            <S.Container>
                <h2>Posts em destaque</h2>
                <S.Content>
                    <S.Left>
                        <PostFeatured {...posts[0]} />
                    </S.Left>
                    <S.Right>
                        {statePostCardFeatured.map((post) => (
                            <PostCardFeatured {...post} key={post.id} />
                        ))}
                    </S.Right>
                </S.Content>
            </S.Container>
        </BaseTemplate>
    );
}
