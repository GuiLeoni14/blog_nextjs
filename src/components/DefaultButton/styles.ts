import styled from 'styled-components';

export const Container = styled.button`
    cursor: pointer;
    line-height: 4.8rem;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.4rem;
    padding: 0rem 2rem;
    &.disabled {
        opacity: 0.6;
    }
`;
