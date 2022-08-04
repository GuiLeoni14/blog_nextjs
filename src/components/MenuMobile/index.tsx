import { Variants } from 'framer-motion';
import { MainContainer } from '../../styles/container';
import * as S from './styles';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { InputSearch } from '../InputSearch';
import { Accordion } from './Accordion';
import { useGetCategoriesAndAuthorsQuery } from '../../graphql/generated';

export function MenuMobile() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { data, loading } = useGetCategoriesAndAuthorsQuery();
    useEffect(() => {
        const element_to_not_scroll = document.querySelector('body');
        if (!element_to_not_scroll || typeof window === 'undefined') return;
        if (isOpenMenu) {
            element_to_not_scroll.style.overflow = 'hidden';
        } else {
            element_to_not_scroll.style.overflow = 'auto';
        }
    }, [isOpenMenu]);
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
                <S.Content
                    variants={variants}
                    animate={isOpenMenu ? 'open' : 'close'}
                    transition={{
                        duration: 1,
                        times: [0, 0.8],
                    }}
                >
                    <MainContainer>
                        {loading ? (
                            <p>carregando</p>
                        ) : (
                            <>
                                <InputSearch />
                                {data && <Accordion categories={data.categories} authors={data.authors} />}
                            </>
                        )}
                    </MainContainer>
                </S.Content>
            </S.Container>
        </>
    );
}
