import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';
import { FcCalendar } from 'react-icons/fc';
export type TPostFeaturedProps = TPostStrapi;

export function PostFeatured({ attributes: { cover, slug, title, autor, createdAt, categories } }: TPostFeaturedProps) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image>
                        <img src={cover.data.attributes.url} alt={cover.data.attributes.alternativeText} />
                    </S.Image>
                    <S.Categories>
                        {categories.data.map((category) => (
                            <span key={category.id}>{category.attributes.name}</span>
                        ))}
                    </S.Categories>
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
                </a>
            </Link>
        </S.Container>
    );
}
