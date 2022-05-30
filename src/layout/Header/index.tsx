import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';
import { useBlogTheme } from '../../hooks/useBlogTheme';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export function Header() {
    const { toggleTheme } = useBlogTheme();
    const router = useRouter();
    const [searchValue, setSearchValue] = useState(router?.query?.q || '');
    const [searchDisable, setSearchDisable] = useState(true);
    const [isReady, setIsReady] = useState(true);
    const inputTimeout = useRef<null | NodeJS.Timeout>(null);
    useEffect(() => {
        if (isReady) {
            setSearchDisable(false);
        } else {
            setSearchDisable(true);
        }
    }, [isReady]);
    useEffect(() => {
        clearTimeout(inputTimeout.current as NodeJS.Timeout);
        if (router?.query?.q === searchValue) return;
        const q = searchValue;
        if (!q || q.length < 3) return;
        inputTimeout.current = setTimeout(() => {
            setIsReady(false);
            router
                .push({
                    pathname: '/search/',
                    query: { q: searchValue },
                })
                .then(() => setIsReady(true));
        }, 600);

        return () => clearTimeout(inputTimeout.current as NodeJS.Timeout);
    }, [searchValue, router]);
    return (
        <S.Container>
            <MainContainer>
                <S.SearchContainer>
                    <S.SearchInput
                        type="search"
                        placeholder="pesquisar por posts"
                        name="q"
                        onChange={(event) => setSearchValue(event.target.value)}
                        value={searchValue}
                        disabled={searchDisable}
                    />
                    {searchDisable ? <IoMdCloseCircle /> : <FiCheckCircle />}
                </S.SearchContainer>
                <button onClick={toggleTheme}>Alterar tema</button>
            </MainContainer>
        </S.Container>
    );
}
