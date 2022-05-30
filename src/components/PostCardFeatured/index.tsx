import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';
import { FcCalendar } from 'react-icons/fc';
export type TPostCardFeaturedProps = TPostStrapi;

export function PostCardFeatured({ attributes: { cover, slug, title, autor, createdAt } }: TPostCardFeaturedProps) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Left>
                        <S.Image>
                            <img src={cover.data.attributes.url} alt={cover.data.attributes.alternativeText} />
                        </S.Image>
                    </S.Left>
                    <S.Right>
                        <S.Title>{title}</S.Title>
                        <S.Info>
                            <span>
                                Por <strong>{autor.data.attributes.name}</strong>
                            </span>
                            <span>
                                <FcCalendar />
                                {formatDate(createdAt)}
                            </span>
                        </S.Info>
                    </S.Right>
                </a>
            </Link>
        </S.Container>
    );
}
