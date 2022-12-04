import { PostFragment } from '../../graphql/generated';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as S from './styles';

export const ArticleHeader = ({ categories, title, cover, excerpt, author, publishedAt }: PostFragment) => {
  return (
    <S.Container>
      <S.Top>
        <S.Cover src={cover.url} alt={title} />
      </S.Top>
      <S.Content>
        <Heading size="big">{title}</Heading>
        <S.Excerpt>{excerpt}</S.Excerpt>
        <ArticleMeta categories={categories} author={author} publishedAt={publishedAt} />
      </S.Content>
    </S.Container>
  );
};
