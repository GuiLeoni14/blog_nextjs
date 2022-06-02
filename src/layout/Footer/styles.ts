import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentTop = styled.div`
    display: flex;
    padding: 10rem 0rem;
    align-items: center;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.gray_3};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray_3};
    justify-content: space-between;
`;

export const BoxContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    & > div {
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            img {
                width: 5rem;
                height: 5rem;
            }
        }
    }
    h4 {
        font-size: 1.8rem;
        max-width: 45rem;
    }
`;
