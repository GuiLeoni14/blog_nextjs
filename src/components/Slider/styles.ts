import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  & > div {
    padding-top: 3rem;
  }
  & .swiper-pagination {
    top: 1rem;
    height: min-content;
    right: 0;
    text-align: end;
    span {
      background: ${({ theme }) => theme.colors.second};
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;
