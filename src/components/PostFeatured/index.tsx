import Image from 'next/image';
import Link from 'next/link';
import { FcCalendar } from 'react-icons/fc';
import { PostFragment } from '../../graphql/generated';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import { ContainerSlug, SlugCategory } from '../Slug';
import * as S from './styles';
export type TPostFeaturedProps = TPostStrapi;

export function PostFeatured({ categories, title, cover, publishedAt, slug, author }: PostFragment) {
  return (
    <S.Container>
      <Link prefetch={false} href={`/post/${slug}`}>
        <S.Image>
          <Image width={720} height={380} src={cover.url} alt="imagem do post" />
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
      </Link>
    </S.Container>
  );
}
