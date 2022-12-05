import Link from 'next/link';
import { PostFragment } from '../../graphql/generated';
import { DatePost } from '../DatePost';
import { SlugCategory } from '../Slug';
import * as S from './styles';

type IArticleMetaProps = Pick<PostFragment, 'categories'> &
  Pick<PostFragment, 'author'> & {
    publishedAt: string;
  };

export const ArticleMeta = ({ categories, publishedAt, author }: IArticleMetaProps) => {
  return (
    <S.Wrapper>
      <div>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link prefetch={false} href={`/author/${author.slug}`}>
              {author.name}
            </Link>
            <span className="separator"> | </span>
          </>
        )}
        <DatePost date={publishedAt} size={1.5} />
        {categories && categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            {categories.map((category) => {
              return (
                <SlugCategory key={`article-meta-cat-${category.id}`}>
                  <Link prefetch={false} href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </SlugCategory>
              );
            })}
          </>
        )}
      </div>
    </S.Wrapper>
  );
};
