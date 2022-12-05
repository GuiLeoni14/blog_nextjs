import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetPostsAndSettingsQuery, useGetPostsAndSettingsQuery } from '../../graphql/generated';

export type TPaginationContext = {
  actualPage: number;
  setActualPage: (page: number) => void;
  data: GetPostsAndSettingsQuery | undefined;
  isLoading: boolean;
};
export const PaginationContext = createContext({} as TPaginationContext);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [actualPage, setActualPage] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setActualPage(0);
  }, [router.asPath]);
  const { data, loading } = useGetPostsAndSettingsQuery({ variables: { last: actualPage + 1 * 6 } });
  return (
    <PaginationContext.Provider value={{ actualPage, setActualPage, data, isLoading: loading }}>
      {children}
    </PaginationContext.Provider>
  );
};
