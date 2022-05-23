import Image from 'next/image';
import { Heading } from '../Heading';
import * as S from './styles';

export type TCardPostProps = {
    id: string;
    image: string;
    content: string;
    title: string;
};
export function CardPost({ content, image, title }: TCardPostProps) {
    return (
        <S.Container>
            <img src={image} />
            <S.Text>
                <Heading as="h4" size="small">
                    {title}
                </Heading>
                <p>{content}</p>
            </S.Text>
        </S.Container>
    );
}
