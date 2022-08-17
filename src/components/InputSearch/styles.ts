import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 60rem;
    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position: relative;
        svg {
            font-size: 2.5rem;
        }
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 8rem;
            height: 8rem;
        }
    }
`;

export const SearchInput = styled.input<{ searchDisable: boolean }>`
    width: 100%;
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.5rem;
    font-size: 1.6rem;
    padding: 1rem ${({ theme }) => theme.spacings.large};
    transition: all 0.3s;
    &:hover,
    &:focus {
        background-color: #e6e6e6;
        border-color: ${({ theme }) => theme.colors.second};
    }
    ${({ searchDisable }) =>
        searchDisable &&
        css`
            opacity: 0.6;
        `}
`;

export const LoadingImage = styled.img<{ showContent: boolean }>`
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;
    ${({ showContent }) =>
        showContent &&
        css`
            opacity: 1;
        `}
`;
