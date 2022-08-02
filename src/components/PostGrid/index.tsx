import * as S from './styles';
import { PostCard } from '../PostCard';
import { GetPostsQuery } from '../../graphql/generated';

function PostGrid({ posts }: GetPostsQuery) {
    const variants = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <S.Container>
            <S.Grid
                variants={variants}
                initial="hidden"
                animate="show"
                style={{ minHeight: posts.length > 3 ? '90rem' : '' }}
            >
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </S.Grid>
        </S.Container>
    );
}

export default PostGrid;
