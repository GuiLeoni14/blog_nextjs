import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)``;

export const Content = styled(motion.button)`
  width: 8rem;
  border-radius: 4rem;
  border: 0.2rem solid ${(props) => props.theme.colors.gray_4};
  height: 3.2rem;
  background: none;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
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
            left: 50%;
            pointer-events: none;
          }
          svg:first-of-type {
            right: 0rem;
            left: initial;
          }
        `
      : css`
          svg:first-of-type {
            opacity: 0;
            right: 50%;
            pointer-events: none;
          }
          svg:last-of-type {
            right: initial;
            left: 0rem;
          }
        `}
`;
