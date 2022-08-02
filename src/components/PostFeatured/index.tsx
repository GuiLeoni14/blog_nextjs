import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';
import { FcCalendar } from 'react-icons/fc';
import { ContainerSlug, SlugCategory } from '../Slug';
import { PostFragment } from '../../graphql/generated';
export type TPostFeaturedProps = TPostStrapi;

export function PostFeatured({ categories, title, cover, publishedAt, slug, author }: PostFragment) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image>
                        <img src={cover.url} alt="imagem do post" />
                    </S.Image>
                    <ContainerSlug>
                        {categories.map((category) => (
                            <SlugCategory key={category.id}>{category.name}</SlugCategory>
                        ))}
                    </ContainerSlug>
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
                </a>
            </Link>
        </S.Container>
    );
}
