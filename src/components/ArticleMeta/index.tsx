import Link from 'next/link';
import { TAuthor } from '../../shared-typed/author';
import { TCategory } from '../../shared-typed/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type TArticleMetaProps = {
    createdAt: string;
    author?: TAuthor;
    categories?: TCategory[];
};

export const ArticleMeta = ({ createdAt, author, categories }: TArticleMetaProps) => {
    return (
        <Styled.Wrapper>
            <p>
                {author && typeof author !== 'undefined' && (
                    <>
                        <span>Por </span>
                        <Link href={`/author/${author.attributes.slug}`}>
                            <a>{author.attributes.name}</a>
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
