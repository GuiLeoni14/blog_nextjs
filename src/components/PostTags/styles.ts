import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacings.medium} 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    gap: 1rem;
    a {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.second};
      padding: 1rem;
      border-radius: 2.4rem;
      text-decoration: none;
      font-size: 1.4rem;
      transition: all 300ms ease-in-out;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
`;
