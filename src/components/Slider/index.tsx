import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import PostCard from '../PostCard';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styles';
import { PostFragment } from '../../graphql/generated';

export type TSliderProps = {
    posts: PostFragment[];
};
export function Slider({ posts }: TSliderProps) {
    return (
        <S.Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <PostCard {...post} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.Container>
    );
}
