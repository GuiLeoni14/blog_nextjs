import Link from 'next/link';
import { TPostTag } from '../../shared-typed/tag';
import * as S from './styles';

export type TPostTagsProps = {
    tags?: TPostTag[];
};
export function PostTags({ tags = [] }: TPostTagsProps) {
    if (tags.length === 0) return null; // react não renderiza nada na tela
    return (
        <S.Container>
            {tags?.map((tag) => (
                <span key={tag.id}>
                    <Link href={`/tag/${tag.attributes.slug}`}>
                        <a>{tag.attributes.name}</a>
                    </Link>
                </span>
            ))}
        </S.Container>
    );
}
