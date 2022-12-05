import { LinearProgress } from '@mui/material';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useMemo, useState } from 'react';
import { ButtonToggleTheme } from '../../components/ButtonToggleTheme';
import { InputSearch } from '../../components/InputSearch';
import { MenuMobile } from '../../components/MenuMobile';
import { GetSettingsQuery } from '../../graphql/generated';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

function Header({ setting }: GetSettingsQuery) {
  const { scrollYProgress } = useScroll();
  const [percentualScroll, setPercentualScroll] = useState<number>(0);
  useEffect(() => {
    scrollYProgress.onChange((state) => setPercentualScroll(Number(state.toFixed(2))));
  }, [scrollYProgress]);
  if (!setting) return null;
  const MemoComponents = useMemo(
    () => (
      <MainContainer>
        <Link prefetch={false} href="/">
          <S.Logo>
            <Image width={80} height={60} src={setting.blogLogo.url} alt="logo" />
          </S.Logo>
        </Link>
        <S.SearchInput>
          <InputSearch />
        </S.SearchInput>
        <ButtonToggleTheme />
        <MenuMobile />
      </MainContainer>
    ),
    [setting],
  );
  return (
    <S.Container>
      {MemoComponents}
      {percentualScroll >= 0 && (
        <S.Progress>
          <LinearProgress variant="determinate" value={percentualScroll * 100} />
        </S.Progress>
      )}
    </S.Container>
  );
}

export default memo(Header);
