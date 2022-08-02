import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';
import { FcCalendar } from 'react-icons/fc';
import { PostFragment } from '../../graphql/generated';
export type TPostCardFeaturedProps = TPostStrapi;

export function PostCardFeatured({ title, cover, slug, author, publishedAt }: PostFragment) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Left>
                        <S.Image>
                            <img src={cover.url} />
                        </S.Image>
                    </S.Left>
                    <S.Right>
                        <S.Title>{title}</S.Title>
                        <S.Info>
                            {author && (
                                <span>
                                    Por <strong>{author.name}</strong>
                                </span>
                            )}
                            <span>
                                <FcCalendar />
                                {formatDate(publishedAt)}
                            </span>
                        </S.Info>
                    </S.Right>
                </a>
            </Link>
        </S.Container>
    );
}
