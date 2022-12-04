import Image from 'next/image';
import Link from 'next/link';
import { FcCalendar } from 'react-icons/fc';
import { PostFragment } from '../../graphql/generated';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';
export type TPostCardFeaturedProps = TPostStrapi;

export function PostCardFeatured({ title, cover, slug, author, publishedAt }: PostFragment) {
  return (
    <S.Container>
      <Link prefetch={false} href={`/post/${slug}`}>
        <S.Left>
          <S.Image>
            <Image width={140} height={100} src={cover.url} alt="imagem do post" />
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
      </Link>
    </S.Container>
  );
}
