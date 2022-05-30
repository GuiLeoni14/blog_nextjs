import styled from 'styled-components';

export const Container = styled.div`
    margin: ${({ theme }) => theme.spacings.medium} 0;
    font-size: ${({ theme }) => theme.font.sizes.small};
    span {
        margin: 0 0 0 0.5rem;
    }
    span::before {
        content: ' ';
    }
    span::after {
        content: ', ';
    }
    span:last-child::after {
        content: '';
    }
    a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        transition: all 300ms ease-in-out;
        &:hover {
            filter: brightness(50%);
        }
    }
`;
