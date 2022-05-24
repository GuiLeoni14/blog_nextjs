import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../Heading';
import { HtmlContent } from '../HtmlContent';
import * as S from './styles';

export type TPostCardProps = {
    id: string;
    slug: string;
    url_image: string;
    excerpt: string;
    title: string;
    alt: string;
};
export function PostCard({ excerpt, url_image, title, id, slug }: TPostCardProps) {
    return (
        <S.Container>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image src={url_image} alt={title} />
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
