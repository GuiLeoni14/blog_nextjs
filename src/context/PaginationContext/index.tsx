import { createContext, ReactNode, useEffect, useState } from 'react';
import { StrapiPostAndSettings } from '../../utils/loadPosts';
import { useQuery } from '../../hooks/useQuery';
import { useRouter } from 'next/router';

export type TPaginationContext = {
    actualPage: number;
    setActualPage: (page: number) => void;
    data: StrapiPostAndSettings | undefined;
    isLoading: boolean;
};
export const PaginationContext = createContext({} as TPaginationContext);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
    const [actualPage, setActualPage] = useState(0);
    const router = useRouter();
    useEffect(() => {
        setActualPage(0);
    }, [router.asPath]);
    const { data, isLoading } = useQuery<StrapiPostAndSettings>({ variables: { pageSize: 6, page: actualPage + 1 } });
    return (
        <PaginationContext.Provider value={{ actualPage, setActualPage, data, isLoading }}>
            {children}
        </PaginationContext.Provider>
    );
};
