import Comments from '../../components/Comments';
import { Post } from '../../components/Post';
import { Slider } from '../../components/Slider';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TPostTemplateProps = {
    setting: { data: TSettingsStrapi };
    post: TPostStrapi;
    posts_related?: { data: TPostStrapi[] };
};

export function PostTemplate({ setting, post, posts_related }: TPostTemplateProps) {
    return (
        <BaseTemplate setting={setting}>
            <Post {...post.attributes} id={post.id} />
            <Comments
                id={post.id}
                slug={post.attributes.slug}
                title={post.attributes.title}
                allowComments={post.attributes.allowComments}
            />
            <S.ContentRelated>
                {posts_related && <h4>Continue lendo</h4>}
                {posts_related && <Slider posts={posts_related} />}
            </S.ContentRelated>
        </BaseTemplate>
    );
}
