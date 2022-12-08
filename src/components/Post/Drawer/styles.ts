import { SwipeableDrawer } from '@mui/material';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(SwipeableDrawer)`
  .MuiDrawer-paperAnchorBottom {
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    ${({ theme }) =>
      theme.title === 'light'
        ? css`
            background-color: ${({ theme }) => theme.colors.white};
          `
        : css`
            background-color: ${({ theme }) => theme.colors.background};
          `};
  }
`;

export const ContentDrawer = styled.div<{ isDrawerOpen: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 4rem;

  .divider_close_drawer {
    position: absolute;
    z-index: 100000;
    width: 10rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, -50%);
    ${(props) =>
      !props.isDrawerOpen &&
      css`
        visibility: visible;
        top: -50rem;
      `}
  }
`;

export const DividerHandleToggleDrawer = styled(motion.div)<{ isDrawerOpen: boolean }>`
  position: absolute;
  z-index: 100000;
  width: 10rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  top: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AfterDrawerOpen = styled.div<{ isDrawerOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 5rem;
  bottom: 0;
  left: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px -1rem 2rem;
  top: initial;
  z-index: 2;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  ${({ theme }) =>
    theme.title === 'light'
      ? css`
          background-color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.background};
        `};
`;
