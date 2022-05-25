import PostGrid from '../../components/PostGrid';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TPostsTemplateProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
};

export function PostsTemplate({ settings, posts }: TPostsTemplateProps) {
    return (
        <S.Container>
            {settings && <BaseTemplate settings={settings}>{posts ? <PostGrid posts={posts} /> : null}</BaseTemplate>}
        </S.Container>
    );
}
