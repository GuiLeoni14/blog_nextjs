import { TLoadPostsVariables } from '../../utils/loadPosts';
import { PostCardFeatured } from '../PostCardFeatured';
import { PostFeatured } from '../PostFeatured';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';

import * as S from './styles';
import { useRouter } from 'next/router';
import { memo } from 'react';

export type TFeaturedProps = {
    setting: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
    variables?: TLoadPostsVariables;
};

function Featured({ posts = [] }: TFeaturedProps) {
    const statePostCardFeatured = posts.slice(1, 5);
    const router = useRouter();
    if (statePostCardFeatured.length < 1 || router.route !== '/') return null;
    return (
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
    );
}

export default memo(Featured);
