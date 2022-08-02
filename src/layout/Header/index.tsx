import { LinearProgress } from '@mui/material';
import { useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ButtonToggleTheme } from '../../components/ButtonToggleTheme';
import { InputSearch } from '../../components/InputSearch';
import { MenuMobile } from '../../components/MenuMobile';
import { GetSettingsQuery } from '../../graphql/generated';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export function Header({ setting }: GetSettingsQuery) {
    const { scrollYProgress } = useViewportScroll();
    const [percentualScroll, setPercentualScroll] = useState<number>(0);
    useEffect(() => {
        scrollYProgress.onChange((state) => setPercentualScroll(Number(state.toFixed(2))));
    }, [scrollYProgress]);
    if (!setting) return null;
    const MemoComponents = useMemo(
        () => (
            <MainContainer>
                <Link href="/">
                    <a>
                        <S.Logo>
                            <img src={setting.blogLogo.url} />
                        </S.Logo>
                    </a>
                </Link>
                <InputSearch />
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
