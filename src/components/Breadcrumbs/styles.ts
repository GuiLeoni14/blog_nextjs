import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    & span:last-child {
      svg {
        display: none;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    gap: 1rem;
    &:last-of-type {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  svg {
    font-size: 1.8rem;
  }
  & > span {
    font-weight: bold;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.media.lteLarge} {
    span {
      font-size: 1.4rem;
    }
  }
  @media ${({ theme }) => theme.media.lteMedium} {
    display: none;
  }
`;
