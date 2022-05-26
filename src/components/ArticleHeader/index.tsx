import { TAuthor } from '../../shared-typed/author';
import { TCategory } from '../../shared-typed/category';
import { TStrapiImage } from '../../shared-typed/strapi-image';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as S from './styles';

export type TArticleHeaderProps = {
    id: string;
    title: string;
    excerpt: string;
    cover: TStrapiImage;
    autor: { data: TAuthor };
    categories: { data: TCategory[] };
    createdAt: string;
};

export const ArticleHeader = ({ title, excerpt, cover, autor, categories, createdAt }: TArticleHeaderProps) => {
    return (
        <S.Container>
            <Heading size="big">{title}</Heading>
            <S.Excerpt>{excerpt}</S.Excerpt>
            <S.Cover src={cover.data.attributes.url} alt={title} />
            <ArticleMeta categories={categories} autor={autor.data} createdAt={createdAt} />
        </S.Container>
    );
};
