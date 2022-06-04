import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const PaginationContainer = styled.div<{ disabled: boolean }>`
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 4rem;
    max-width: 30rem;
    .swiper-wrapper {
        display: flex;
        justify-content: center;
    }
    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            opacity: 0.8;
        `}
`;
export const PaginationNumber = styled.div`
    width: 2.8rem;
    cursor: pointer;
    margin: 0 auto;
    font-size: 1.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 0.2rem solid transparent;
    &.active {
        border-color: ${({ theme }) => theme.colors.second};
    }
`;
export const PaginationButton = styled.button`
    cursor: pointer;
    font-size: 2rem;
    padding: 0rem 2rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.second};
`;

export const Slide = styled(SwiperSlide)``;
