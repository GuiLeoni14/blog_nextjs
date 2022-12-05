import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  & > h2 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
  @media ${({ theme }) => theme.media.lteMedium} {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const ButtonMorePosts = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0rem 4rem;
  border-radius: 0.5rem;
  line-height: 4.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Left = styled.div`
  width: 100%;
  max-width: 72rem;
  height: 100%;
`;

export const Right = styled.div`
  flex: 1;
  width: 100%;
  max-width: 45rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media ${({ theme }) => theme.media.lteMedium} {
    max-width: 100%;
  } ;
`;
