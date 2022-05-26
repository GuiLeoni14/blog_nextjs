import Link from 'next/link';
import { TAuthor } from '../../shared-typed/author';
import { TCategory } from '../../shared-typed/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type TArticleMetaProps = {
    createdAt: string;
    autor?: TAuthor;
    categories?: TCategory[];
};

export const ArticleMeta = ({ createdAt, autor, categories }: TArticleMetaProps) => {
    return (
        <Styled.Wrapper>
            <p>
                {autor && typeof autor !== 'undefined' && (
                    <>
                        <span>Por </span>
                        <Link href={`/author/${autor.attributes.slug}`}>
                            <a>{autor.attributes.name}</a>
                        </Link>
                        <span className="separator"> | </span>
                    </>
                )}

                <span>{formatDate(createdAt)}</span>

                {categories && categories.length > 0 && (
                    <>
                        <span className="separator"> | </span>
                        <span className="categories">
                            {categories.map((category) => {
                                return (
                                    <span key={`article-meta-cat-${category.id}`}>
                                        <Link href={`/category/${category.attributes.slug}`}>
                                            <a>{category.attributes.name}</a>
                                        </Link>
                                    </span>
                                );
                            })}
                        </span>
                    </>
                )}
            </p>
        </Styled.Wrapper>
    );
};
