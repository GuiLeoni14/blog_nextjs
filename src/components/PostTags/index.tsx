import Link from 'next/link';
import { PostFragment } from '../../graphql/generated';
import { Heading } from '../Heading';
import * as S from './styles';

export function PostTags({ tags }: Pick<PostFragment, 'tags'>) {
  if (tags.length === 0) return null; // react não renderiza nada na tela
  return (
    <>
      {tags && (
        <S.Container>
          <Heading as="h5" size="small">
            Tags
          </Heading>
          <div>
            {tags.map((tag) => (
              <span key={tag.id}>
                <Link prefetch={false} href={`/tag/${tag.slug}`}>
                  {tag.name}
                </Link>
              </span>
            ))}
          </div>
        </S.Container>
      )}
    </>
  );
}
