import Image from 'next/image';
import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { Heading } from '../Heading';
import { HtmlContent } from '../HtmlContent';
import * as S from './styles';

export type TPostCardProps = TPostStrapi;

export function PostCard({ id, attributes: { cover, slug, title, excerpt } }: TPostCardProps) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image src={cover.data.attributes.url} alt={cover.data.attributes.alternativeText} />
                </a>
            </Link>
            <S.Text>
                <Heading as="h6" size="small">
                    {title}
                </Heading>
                <p>
                    <HtmlContent html={excerpt} />
                </p>
            </S.Text>
        </S.Container>
    );
}
