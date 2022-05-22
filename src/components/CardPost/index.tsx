import Image from 'next/image';
import * as S from './styles';

export type TCardPostProps = {
    id: string;
    image: string;
    content: string;
    title: string;
};
function CardPost({ content, image, title }: TCardPostProps) {
    return (
        <S.Container>
            <img src={image} />
            <S.Text>
                <h4>{title}</h4>
                <p>{content}</p>
            </S.Text>
        </S.Container>
    );
}

export default CardPost;
