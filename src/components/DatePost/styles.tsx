import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.gray_4};
    strong {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
