import styled from 'styled-components';

export const ContainerSlug = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const SlugCategory = styled.span`
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.8rem;
    padding: 0 1.2rem;
    border-radius: 10rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.second};
    background-color: ${({ theme }) => theme.colors.primary};
`;
