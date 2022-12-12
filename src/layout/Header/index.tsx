import { LinearProgress } from '@mui/material';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import { ButtonToggleTheme } from '../../components/ButtonToggleTheme';
import { InputSearch } from '../../components/InputSearch';
import { MenuMobile } from '../../components/MenuMobile';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

function Header() {
  const { scrollYProgress } = useScroll();
  const [percentualScroll, setPercentualScroll] = useState<number>(0);
  useEffect(() => {
    scrollYProgress.onChange((state) => setPercentualScroll(Number(state.toFixed(2))));
  }, [scrollYProgress]);
  return (
    <S.Container>
      <MainContainer>
        <Link prefetch={false} href="/">
          <S.Logo>
            <Image width={80} height={60} src="/images/logo.png" alt="logo" />
          </S.Logo>
        </Link>
        <S.SearchInput>
          <InputSearch />
        </S.SearchInput>
        <ButtonToggleTheme />
        <MenuMobile />
      </MainContainer>
      {percentualScroll >= 0 && (
        <S.Progress>
          <LinearProgress variant="determinate" value={percentualScroll * 100} />
        </S.Progress>
      )}
    </S.Container>
  );
}

export default memo(Header);
