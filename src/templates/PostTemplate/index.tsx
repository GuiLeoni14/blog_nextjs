import Comments from '../../components/Comments';
import { Post } from '../../components/Post';
import { Slider } from '../../components/Slider';
import { TPostStaticProps } from '../../pages/post/[slug]';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';

export function PostTemplate({ setting, posts, posts_related }: TPostStaticProps) {
    const post = posts[0];
    return (
        <BaseTemplate setting={setting} posts={posts}>
            <Post {...post} id={post.id} />
            <Comments id={post.id} slug={post.slug} title={post.title} allowComments={post.allowComments} />
            <S.ContentRelated>
                {posts_related && <h4>Continue lendo</h4>}
                {posts_related && <Slider posts={posts_related} />}
            </S.ContentRelated>
        </BaseTemplate>
    );
}
