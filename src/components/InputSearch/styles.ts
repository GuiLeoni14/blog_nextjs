import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    svg {
        font-size: 2.5rem;
    }
`;

export const SearchInput = styled.input`
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.2rem;
    font-size: 1.6rem;
    padding: 1rem ${({ theme }) => theme.spacings.large};
`;
