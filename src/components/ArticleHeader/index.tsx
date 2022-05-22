import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { StrapiImage } from '../../shared-typed/strapi-image';
import * as Styled from './styles';

export type TArticleHeaderProps = {
    id: string;
    title: string;
    excerpt: string;
    cover: StrapiImage;
    author: Author;
    categories: Category[];
    createdAt: string;
};

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: TArticleHeaderProps) => {
    return (
        <Styled.Wrapper>
            {/* <Heading size="big">{title}</Heading> */}
            <Styled.Excerpt>{excerpt}</Styled.Excerpt>
            <Styled.Cover src={cover.url} alt={title} />
            {/* <ArticleMeta categories={categories} author={author} createdAt={createdAt} /> */}
        </Styled.Wrapper>
    );
};
