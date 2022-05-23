import Image from 'next/image';
import { Heading } from '../Heading';
import * as S from './styles';

export type TPostCardProps = {
    id: string;
    image: string;
    excerpt: string;
    title: string;
};
export function PostCard({ excerpt, image, title }: TPostCardProps) {
    return (
        <S.Container>
            <img src={image} />
            <S.Text>
                <Heading as="h4" size="small">
                    {title}
                </Heading>
                <p>{excerpt}</p>
            </S.Text>
        </S.Container>
    );
}
