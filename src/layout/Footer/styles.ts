import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
`;

export const ContentTop = styled.div`
    display: flex;
    padding: 10rem 0rem;
    align-items: center;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.gray_3};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray_3};
    justify-content: space-between;
    @media ${({ theme }) => theme.media.lteMedium} {
        flex-direction: column-reverse;
        gap: 4rem;
        align-items: center;
    } ;
`;

export const BoxContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 40rem;
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
    &.about :first-child {
        margin: 0 auto;
        width: 100%;
        max-width: 15rem;
        overflow: hidden;
        border-radius: 50%;
        img {
            max-width: 100%;
            object-fit: cover;
        }
    }
    h4 {
        a {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    p {
        font-size: 1.4rem;
    }
`;

export const Wave = styled.div`
    width: 100%;
    position: absolute;
    bottom: -5rem;
    left: 0;
    z-index: 9;
`;
