import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  & > div {
    width: 100%;
  }
  .MuiAccordionSummary-root {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  div.MuiAccordionDetails-root {
    background-color: ${({ theme }) => theme.colors.background};
  }
  @media ${({ theme }) => theme.media.lteMedium} {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  & > a + a {
    margin-top: 1rem !important;
    padding-top: 1rem;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.second};
  }
  & > a {
    display: flex;
    gap: 2rem;
    align-items: center;
    img {
      width: 5rem;
      height: 5rem;
    }
    h6 {
      font-size: 1.6rem;
    }
  }
`;

export const Item = styled.div``;
