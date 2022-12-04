import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: block;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 38rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3.2rem;
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
    object-fit: cover;
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 1.2rem;
  span {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.8rem;
    padding: 0 1.2rem;
    border-radius: 10rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.second};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  max-width: 95%;
  margin: 2rem 0rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 2rem;
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
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme: { spacings } }) => spacings.medium};
  padding: 1rem;
  p {
    font-size: 1.6rem;
  }
`;
