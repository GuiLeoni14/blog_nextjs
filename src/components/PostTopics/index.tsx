import { useEffect, useState } from 'react';
import { Heading } from '../Heading';
import * as S from './styles';

export type TPostTopicsProps = {
    searchClassTopics: string;
};

export function PostTopics({ searchClassTopics }: TPostTopicsProps) {
    const [topics, setTopics] = useState([] as string[]);
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const positionInicialSection = section.offsetTop;
            window.scrollTo({
                top: positionInicialSection - 120,
                behavior: 'smooth',
            });
        }
    };
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll(`.${searchClassTopics} h2`).forEach((item, index) => {
                if (item.textContent) {
                    item.setAttribute('id', `topic-${index}`);
                    setTopics((state) => [...state, item.textContent as string]);
                }
            });
        }, 300);
        return () => clearTimeout();
    }, [setTopics, searchClassTopics]);
    return (
        <>
            {topics.length > 0 && (
                <S.Container>
                    <Heading as="h5" size="small">
                        Navegue por tópicos
                    </Heading>
                    <S.Topics>
                        {topics.map((topic, index) => (
                            <span key={index} onClick={() => scrollToSection(`topic-${index}`)}>
                                {topic}
                            </span>
                        ))}
                    </S.Topics>
                </S.Container>
            )}
        </>
    );
}
