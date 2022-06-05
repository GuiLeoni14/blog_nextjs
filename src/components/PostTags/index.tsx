import Link from 'next/link';
import { TPostTag } from '../../shared-typed/tag';
import { Heading } from '../Heading';
import * as S from './styles';

export type TPostTagsProps = {
    tags?: TPostTag[];
};
export function PostTags({ tags = [] }: TPostTagsProps) {
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
                                <Link href={`/tag/${tag.attributes.slug}`}>
                                    <a>{tag.attributes.name}</a>
                                </Link>
                            </span>
                        ))}
                    </div>
                </S.Container>
            )}
        </>
    );
}
