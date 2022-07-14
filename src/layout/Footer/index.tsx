import { MainContainer } from '../../styles/container';
import { Container } from './styles';
import * as S from './styles';
import { Heading } from '../../components/Heading';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <Container>
            <MainContainer>
                <S.ContentTop>
                    <S.BoxContent>
                        <div>
                            <a href="http://https://pt-br.reactjs.org" target="_blank" rel="noopener noreferrer">
                                <motion.img
                                    src="/images/icon-react.svg"
                                    className="react"
                                    animate={{
                                        rotate: -360,
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: 'linear',
                                        repeat: Infinity,
                                    }}
                                />
                            </a>
                            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icon-nextjs.svg" />
                            </a>
                            <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icon-typescript.svg" />
                            </a>
                            <a href="https://strapi.io" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icon-strapi.svg" />
                            </a>
                            <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icon-graphql.svg" />
                            </a>
                        </div>
                        <Heading as="h4" size="small">
                            Desenvolvido com REACT + NEXTJS + TYPESCRIPT + STRAPI + GRAPHQL
                        </Heading>
                    </S.BoxContent>
                    <S.BoxContent className="about">
                        <div>
                            <img src="https://github.com/GuiLeoni14.png" />
                        </div>
                        <h4>
                            Desenvolvido por{' '}
                            <a href="https://github.com/GuiLeoni14" target="_blank" rel="noopener noreferrer">
                                Guilherme Leoni
                            </a>
                        </h4>
                        <p>Olá! Me chamo Guilherme, sou um garoto apaixonado por programação e tecnologia!🙌❤️</p>
                    </S.BoxContent>
                </S.ContentTop>
            </MainContainer>
        </Container>
    );
}
