import { Variants } from 'framer-motion';
import { MainContainer } from '../../styles/container';
import * as S from './styles';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { InputSearch } from '../InputSearch';
import { useQuery } from '../../hooks/useQuery';
import { GRAPHQL_CATEGORIES_AND_AUTHORS_QUERY } from '../../graphql/queries';
import { TCategory } from '../../shared-typed/category';
import { Accordion } from './Accordion';
import { TAuthor } from '../../shared-typed/author';

export function MenuMobile() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { data, isLoading } = useQuery<{ categories: { data: TCategory[] }; autors: { data: TAuthor[] } }>({
        query: GRAPHQL_CATEGORIES_AND_AUTHORS_QUERY,
    });
    console.log('data', data);
    const variants: Variants = {
        open: {
            y: 0,
            opacity: 1,
            pointerEvents: 'all',
        },
        close: {
            y: 100,
            opacity: 0,
            pointerEvents: 'none',
        },
    };
    return (
        <>
            <S.ButtonToggle onClick={() => setIsOpenMenu((state) => !state)} isMenuOpened={isOpenMenu}>
                <RiMenu3Fill />
                <RiCloseFill />
            </S.ButtonToggle>
            <S.Container
                initial={{ y: 100, opacity: 0, pointerEvents: 'none' }}
                variants={variants}
                transition={{ duration: 0.3 }}
                animate={isOpenMenu ? 'open' : 'close'}
            >
                <S.WrapperClose onClick={() => setIsOpenMenu((state) => !state)} />
                <MainContainer>
                    {isLoading ? (
                        <p>carregando</p>
                    ) : (
                        <S.Content
                            variants={variants}
                            animate={isOpenMenu ? 'open' : 'close'}
                            transition={{
                                duration: 1,
                                times: [0, 0.8],
                            }}
                        >
                            <InputSearch />
                            {data && <Accordion categories={data.categories.data} autors={data.autors.data} />}
                        </S.Content>
                    )}
                </MainContainer>
            </S.Container>
        </>
    );
}
