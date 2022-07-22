import Comments from '../../components/Comments';
import { Post } from '../../components/Post';
import { Slider } from '../../components/Slider';
import { Get_Page_Content_TextQuery } from '../../graphql/generated';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TPostTemplateProps = {
    setting: { data: TSettingsStrapi };
    post: TPostStrapi;
    contentPage: Get_Page_Content_TextQuery;
    posts_related?: { data: TPostStrapi[] };
};

export function PostTemplate({ setting, post, contentPage, posts_related }: TPostTemplateProps) {
    return (
        <BaseTemplate setting={setting} contentPage={contentPage}>
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
