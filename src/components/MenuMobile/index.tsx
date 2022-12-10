import { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useAuthors } from '../../hooks/fetch/useAuthors';
import { useCategories } from '../../hooks/fetch/useCategories';
import { MainContainer } from '../../styles/container';
import { InputSearch } from '../InputSearch';
import { Accordion } from './Accordion';
import * as S from './styles';

export function MenuMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { data: authorsData, isLoading: isLoadingAuthors } = useAuthors({
    identifier: 'authors-menu',
  });
  const { data: categoriesData, isLoading: isLoadingCategories } = useCategories({
    identifier: 'categories-menu',
  });
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
            {isLoadingAuthors || isLoadingCategories ? (
              <p>carregando</p>
            ) : (
              <>
                <InputSearch />
                {categoriesData && authorsData && (
                  <Accordion categories={categoriesData.categories} authors={authorsData.authors} />
                )}
              </>
            )}
          </MainContainer>
        </S.Content>
      </S.Container>
    </>
  );
}
