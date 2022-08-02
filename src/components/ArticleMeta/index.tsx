import Link from 'next/link';
import { PostFragment } from '../../graphql/generated';
import { DatePost } from '../DatePost';
import { SlugCategory } from '../Slug';
import * as S from './styles';

type IArticleMetaProps = Pick<PostFragment, 'categories'> &
    Pick<PostFragment, 'author'> &
    Pick<PostFragment, 'publishedAt'>;

export const ArticleMeta = ({ categories, publishedAt, author }: IArticleMetaProps) => {
    return (
        <S.Wrapper>
            <div>
                {author && typeof author !== 'undefined' && (
                    <>
                        <span>Por </span>
                        <Link href={`/author/${author.slug}`}>
                            <a>{author.name}</a>
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
                                    <Link href={`/category/${category.slug}`}>
                                        <a>{category.name}</a>
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
