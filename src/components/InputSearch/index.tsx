import { useRouter } from 'next/router';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { PostFragment } from '../../graphql/generated';
import * as S from './styles';
export type TInputSearch = PostFragment & {
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
    if (router.isFallback) return;
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
    }, 1000);

    return () => clearTimeout(inputTimeout.current as NodeJS.Timeout);
  }, [searchValue, router]);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    setIsReady(false);
    router
      .push({
        pathname: '/search/',
        query: { q: searchValue },
      })
      .then(() => setIsReady(true));
  };
  return (
    <S.Container className="search">
      <form onSubmit={handleSubmitForm}>
        <S.SearchInput
          type="search"
          placeholder="pesquisar por posts"
          name="q"
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          disabled={searchDisable}
          searchDisable={searchDisable}
        />
        <S.LoadingImage
          showContent={searchDisable && searchValue.length > 0}
          src="/images/loading.gif"
          alt="ícone de loading simbolizando o carregamento do input"
        />
      </form>
    </S.Container>
  );
}
