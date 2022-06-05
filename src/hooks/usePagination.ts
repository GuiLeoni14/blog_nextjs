import { useContext } from 'react';
import { PaginationContext } from '../context/PaginationContext';
export const usePagination = () => {
    const { actualPage, setActualPage, data, isLoading } = useContext(PaginationContext);
    return {
        setActualPage,
        actualPage,
        data,
        isLoading,
    };
};
