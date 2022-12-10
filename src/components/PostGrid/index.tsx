import { PostFragment } from '../../graphql/generated';
import PostCard from '../PostCard';
import * as S from './styles';

function PostGrid({ posts }: { posts: PostFragment[] }) {
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
