import { Variants } from 'framer-motion';
import { MainContainer } from '../../styles/container';
import { SearchInput } from '../InputSearch/styles';
import * as S from './styles';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';

export function MenuMobile() {
    const [isOpenMenu, setIsOpenMenu] = useState(true);
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
            <S.ButtonToggle onClick={() => setIsOpenMenu(state => !state)} isMenuOpened={isOpenMenu}>
                <RiMenu3Fill />
                <RiCloseFill />
            </S.ButtonToggle>
            <S.Container variants={variants} transition={{ duration: 0.3 }} animate={isOpenMenu ? 'open' : 'close'}>
                <S.WrapperClose onClick={() => setIsOpenMenu(state => !state)} />
                <MainContainer>
                    <S.Content>
                        <SearchInput />
                    </S.Content>
                </MainContainer>
            </S.Container>
        </>
    );
}
