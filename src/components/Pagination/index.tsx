import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './styles';
import { usePagination } from '../../hooks/usePagination';
import { toast } from 'react-toastify';

interface IPaginationProps {
    pagination: {
        pageCount: number;
    };
}
export function Pagination({ pagination: { pageCount } }: IPaginationProps) {
    const { actualPage, setActualPage, isLoading } = usePagination();
    const handleClickNext = () => {
        if (isLoading) {
            toast.warning('Espere um minuto estamos buscando mais posts!', {
                position: 'top-center',
            });
            return;
        }
        if (actualPage + 1 === pageCount) {
            toast.warning('Ops!, sem posts para carregar!', {
                position: 'top-center',
            });
            return;
        }
        setActualPage(actualPage + 1);
    };
    const handleClickPrev = () => {
        if (isLoading) {
            toast.warning('Espere um minuto estamos buscando mais posts', {
                position: 'top-center',
            });
            return;
        }
        if (actualPage <= 0) {
            toast.warning('Ei!! estamos na primeira página.', {
                position: 'top-center',
            });
            return;
        }
        setActualPage(actualPage - 1);
    };
    return (
        <S.PaginationContainer>
            <S.ButtonPrev
                onClick={handleClickPrev}
                className={actualPage <= 0 || isLoading ? 'disabled' : ''}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
                Anterior
            </S.ButtonPrev>
            <S.ButtonNext
                onClick={handleClickNext}
                className={actualPage + 1 === pageCount || isLoading ? 'disabled' : ''}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
                Próxima
            </S.ButtonNext>
        </S.PaginationContainer>
    );
}
