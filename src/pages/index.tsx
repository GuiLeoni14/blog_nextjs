import { PostCard } from '../components/PostCard';
import { usePosts } from '../hooks/fetch/usePosts';

export default function Home() {
  const { data: posts } = usePosts({
    identifier: 'post-teste',
    params: {
      last: 3,
    },
  });
  return (
    <div className="grid grid-cols-3 gap-5">
      {posts?.map((post) => {
        return (
          <PostCard
            key={post.slug}
            title={post.title}
            excerpt={post.title}
            thumbnail={post.cover.url}
            date={post.publishedAt}
            tags={post.tags.map((tag) => tag.name)}
          />
        );
      })}
    </div>
  );
}
