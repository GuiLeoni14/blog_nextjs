import * as S from './styles';
import { PostCard } from '../PostCard';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { MainContainer } from '../../styles/container';

export type TPostGridProps = {
    posts: TPostStrapi[];
};
function PostGrid({ posts }: TPostGridProps) {
    return (
        <S.Container>
            <MainContainer>
                <S.Grid>
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            url_image={post.attributes.cover.data.attributes.url}
                            alt={post.attributes.cover.data.attributes.alternativeText}
                            excerpt={post.attributes.excerpt}
                            id={post.id}
                            slug={post.attributes.slug}
                            title={post.attributes.title}
                        />
                    ))}
                </S.Grid>
            </MainContainer>
        </S.Container>
    );
}

export default PostGrid;
