import styled from 'styled-components';

export const Container = styled.div``;
export const ButtonMorePosts = styled.button`
    cursor: pointer;
    display: inline-block;
    padding: 0rem 4rem;
    border-radius: 0.5rem;
    line-height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
`;
