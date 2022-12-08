import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 4rem;
`;
export const LeftContent = styled.div`
  flex: 1;
  width: 100%;
  max-width: 30%;
  position: sticky;
  top: 15rem;
  @media ${({ theme }) => theme.media.lteMedium} {
    display: none;
  }
`;
export const RightContent = styled.div`
  flex: 1;
  width: 100%;
  max-width: 70%;
  @media ${({ theme }) => theme.media.lteMedium} {
    max-width: 100%;
  }
`;
