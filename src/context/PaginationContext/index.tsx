import { createContext, ReactNode, useState } from 'react';
import qs from 'query-string';
import { StrapiPostAndSettings } from '../../utils/loadPosts';
import { useQuery } from '../../hooks/useQuery';

export type TPaginationContext = {
    actualPage: number;
    setActualPage: (page: number) => void;
    data: StrapiPostAndSettings | undefined;
    isLoading: any;
};
export const PaginationContext = createContext({} as TPaginationContext);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
    const [actualPage, setActualPage] = useState(0);
    qs;
    const { data, isLoading } = useQuery<StrapiPostAndSettings>({ pageSize: 6, page: actualPage + 1 });
    return (
        <PaginationContext.Provider value={{ actualPage, setActualPage, data, isLoading }}>
            {children}
        </PaginationContext.Provider>
    );
};
