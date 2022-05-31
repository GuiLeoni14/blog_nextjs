import * as S from './styles';
import { PostCard } from '../PostCard';
import { TPostStrapi } from '../../shared-typed/post-strapi';

export type TPostGridProps = {
    posts: TPostStrapi[];
};
function PostGrid({ posts }: TPostGridProps) {
    return (
        <S.Container>
            <S.Grid>
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </S.Grid>
        </S.Container>
    );
}

export default PostGrid;
