import Link from 'next/link';
import { TAuthor } from '../../shared-typed/author';
import { TCategory } from '../../shared-typed/category';
import { DatePost } from '../DatePost';
import { SlugCategory } from '../Slug';
import * as Styled from './styles';

export type TArticleMetaProps = {
    createdAt: string;
    autor?: TAuthor;
    categories?: { data: TCategory[] };
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
                <DatePost date={createdAt} size={1.5} />
                {categories && categories.data.length > 0 && (
                    <>
                        <span className="separator"> | </span>
                        {categories.data.map((category) => {
                            return (
                                <SlugCategory key={`article-meta-cat-${category.id}`}>
                                    <Link href={`/category/${category.attributes.slug}`}>
                                        <a>{category.attributes.name}</a>
                                    </Link>
                                </SlugCategory>
                            );
                        })}
                    </>
                )}
            </p>
        </Styled.Wrapper>
    );
};
