import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';
import { TArticleHeaderProps } from '../ArticleHeader';
import * as S from './styles';
export type TInputSearch = TArticleHeaderProps & {
    content: string;
};
export function InputSearch() {
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
            <S.SearchInput
                type="search"
                placeholder="pesquisar por posts"
                name="q"
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
                disabled={searchDisable}
            />
            {searchDisable ? <IoMdCloseCircle /> : <FiCheckCircle />}
        </S.Container>
    );
}
