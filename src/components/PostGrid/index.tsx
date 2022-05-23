import * as S from './styles';
import { PostCard, TPostCardProps } from '../PostCard';
export type TCardGridProps = {
    posts: TPostCardProps[];
};

function PostGrid({ posts }: TCardGridProps) {
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
