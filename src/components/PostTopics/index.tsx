import { AnchorHTMLAttributes, LinkHTMLAttributes, useEffect, useState } from 'react';
import { Heading } from '../Heading';
import * as S from './styles';

export type TPostTopicsProps = {
    searchClassTopics: string;
};

export function PostTopics({ searchClassTopics }: TPostTopicsProps) {
    const [topics, setTopics] = useState([] as string[]);
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        console.log(section);
        if (section) {
            const positionInicialSection = section.offsetTop;
            window.scrollTo({
                top: positionInicialSection - 100,
                behavior: 'smooth',
            });
        }
    };
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll(`.${searchClassTopics} h2`).forEach((item, index) => {
                console.log(item.textContent);
                if (item.textContent) {
                    item.setAttribute('id', `topic-${index}`);
                    setTopics((state) => [...state, item.textContent as string]);
                }
            });
        }, 300);
        return () => clearTimeout();
    }, [setTopics, searchClassTopics]);
    useEffect(() => {
        console.log(topics);
    }, [topics]);
    return (
        <S.Container>
            <Heading as="h5" size="small">
                Navegue por tópicos
            </Heading>
            <S.Topics>
                {topics.length > 0 &&
                    topics.map((topic, index) => (
                        <a key={index} href={`#topic-${index}`}>
                            {topic}
                        </a>
                    ))}
            </S.Topics>
        </S.Container>
    );
}
