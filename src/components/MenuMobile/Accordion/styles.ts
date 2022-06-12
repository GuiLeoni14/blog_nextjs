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
    }
    div.MuiAccordionDetails-root {
        background-color: ${({ theme }) => theme.colors.background};
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
        margin-top: 1rem;
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
