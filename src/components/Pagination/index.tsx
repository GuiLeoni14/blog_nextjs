import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './styles';
import { TMetaPagination } from '../../utils/loadPosts';
import { usePagination } from '../../hooks/usePagination';
export function Pagination({ pagination: { pageCount } }: TMetaPagination) {
    const { actualPage, setActualPage, isLoading } = usePagination();
    return (
        <S.PaginationContainer disabled={Boolean(isLoading)}>
            <Swiper
                slidesPerView={5}
                navigation={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
            >
                {Array(pageCount)
                    .fill('')
                    .map((_, index) => (
                        <SwiperSlide key={index}>
                            <S.PaginationNumber
                                onClick={() => setActualPage(index)}
                                className={index === actualPage ? 'active' : ''}
                            >
                                {index + 1}
                            </S.PaginationNumber>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </S.PaginationContainer>
    );
}
