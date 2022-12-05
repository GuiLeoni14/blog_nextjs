import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 2022;
  & > div + div {
    width: 100%;
    z-index: 10;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => (theme.title === 'light' ? theme.colors.gray_6 : theme.colors.gray_1)};
  }
`;

export const WrapperClose = styled.div`
  position: fixed;
  z-index: 9;
  background-color: rgba(41, 6, 45, 0.6);
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled(motion.div)`
  & > div {
    padding: 4rem 1rem;
    input {
      width: 100%;
    }
    & > div > div {
      margin: 2rem 0rem;
    }
  }
`;

export const ToggleTheme = styled.div`
  position: absolute;
  top: 0;
  right: 4rem;
`;
export const ButtonToggle = styled.div<{ isMenuOpened: boolean }>`
  display: block;
  cursor: pointer;
  svg {
    font-size: 5rem;
    transition: all 0.3s;
  }
  ${({ isMenuOpened }) =>
    isMenuOpened
      ? css`
          svg:first-of-type {
            opacity: 0;
            width: 0;
            height: 0;
          }
        `
      : css`
          svg:last-of-type {
            opacity: 0;
            width: 0;
            height: 0;
          }
        `}
  @media ${({ theme }) => theme.media.lteMedium} {
    display: block;
  }
`;
