import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 10rem;
  & > h3 {
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge};
    font-size: 3.2rem;
  }
`;
export const ButtonMorePosts = styled.button<{ isLoading: boolean }>`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 0rem ${({ theme }) => theme.spacings.xxlarge};
  border-radius: 0.5rem;
  line-height: 4.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  .image_loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.6;
    `}
`;

interface ObservableContentProps {
  close: boolean;
}
export const ObservableContent = styled.div<ObservableContentProps>`
  width: 100%;
  height: 10rem;
  ${(props) =>
    props.close &&
    css`
      width: 0;
      height: 0;
      display: none;
    `}
`;
