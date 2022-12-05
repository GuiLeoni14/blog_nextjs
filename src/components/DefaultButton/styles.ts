import styled, { css } from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  margin: 0 auto;
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

export const LoadingImage = styled.img<{ showContent: boolean }>`
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  ${({ showContent }) =>
    showContent &&
    css`
      opacity: 1;
    `}
`;
