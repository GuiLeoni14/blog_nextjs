import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme: { spacings } }) => spacings.medium} 0rem;
  margin-bottom: ${({ theme: { spacings } }) => spacings.medium};
  border-bottom: 0.2rem solid ${({ theme: { colors } }) => colors.mediumGray};
`;

export const Top = styled.div`
  width: 100%;
  height: 47.2rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => (theme.title === 'light' ? theme.colors.background : theme.colors.gray_1)};
  box-shadow: 0rem 2.4rem 4rem -0.8rem ${({ theme }) => (theme.title === 'light' ? 'rgba(16, 12, 28, 0.1)' : 'rgba(16, 12, 28, 1)')};
  border-radius: 0.8rem;
  width: 100%;
  max-width: 100.8rem;
  padding: 4.8rem 7.2rem;
  margin: 0 auto;
  margin-top: -10.6rem;
  @media ${({ theme }) => theme.media.lteSmall} {
    padding: 2.5rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Excerpt = styled.p`
  font-size: ${({ theme: { font } }) => font.sizes.small};
  margin: ${({ theme: { spacings } }) => spacings.medium} 0rem;
  text-align: justify;
`;

export const Cover = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
