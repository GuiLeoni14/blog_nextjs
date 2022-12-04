import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const PaginationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 30rem;
  .swiper-wrapper {
    display: flex;
    justify-content: center;
  }
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

export const ButtonNext = styled(motion.button)`
  cursor: pointer;
  line-height: 4.8rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.4rem;
  padding: 0rem 2rem;
  &.disabled {
    opacity: 0.6;
  }
`;
export const ButtonPrev = styled(motion.button)`
  cursor: pointer;
  line-height: 4.8rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.4rem;
  padding: 0rem 2rem;
  &.disabled {
    opacity: 0.6;
  }
`;

export const Loading = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
