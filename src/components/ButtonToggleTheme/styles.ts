import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)``;

export const Content = styled(motion.button)`
  width: 4rem;
  height: 4rem;
  background: none;
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    transition: all 0.3s;
  }
  svg:last-of-type {
    color: ${(props) => props.theme.colors.gray_6};
  }
  svg:first-of-type {
    color: #dfaf20;
  }
  ${({ theme: { title } }) =>
    title === 'light'
      ? css`
          svg + svg {
            opacity: 0;
            pointer-events: none;
          }
        `
      : css`
          svg:first-of-type {
            opacity: 0;
            pointer-events: none;
          }
        `}
`;
