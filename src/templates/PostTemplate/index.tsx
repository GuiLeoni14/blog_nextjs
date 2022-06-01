import Comments from '../../components/Comments';
import { Post } from '../../components/Post';
import PostGrid from '../../components/PostGrid';
import { PostTags } from '../../components/PostTags';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';

import * as S from './styles';

export type TPostTemplateProps = {
    settings: { data: TSettingsStrapi };
    post: TPostStrapi;
    posts_related?: { data: TPostStrapi[] };
};

export function PostTemplate({ settings, post, posts_related }: TPostTemplateProps) {
    console.log(posts_related);
    return (
        <BaseTemplate settings={settings}>
            <Post {...post.attributes} id={post.id} />
            <S.TagsContainer>
                <PostTags tags={post.attributes.tags.data} />
            </S.TagsContainer>
            <Comments
                id={post.id}
                slug={post.attributes.slug}
                title={post.attributes.title}
                allowComments={post.attributes.allowComments}
            />
            <S.ContentRelated>
                <h4>Continue lendo</h4>
                {posts_related && posts_related.data.length > 0 && (
                    <PostGrid key={post.id} posts={posts_related.data} />
                )}
            </S.ContentRelated>
        </BaseTemplate>
    );
}
