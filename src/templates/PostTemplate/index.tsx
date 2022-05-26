import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TPostTemplateProps = {
    settings: { data: TSettingsStrapi };
    post: TPostStrapi;
};

export function PostTemplate({ settings, post }: TPostTemplateProps) {
    return (
        <BaseTemplate settings={settings}>
            <Post {...post.attributes} id={post.id} />
            <S.TagsContainer>
                <PostTags tags={post.attributes.tags.data} />
            </S.TagsContainer>
        </BaseTemplate>
    );
}
