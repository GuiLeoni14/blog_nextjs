import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-top: 10rem;
    & > h3 {
        margin-bottom: ${({ theme }) => theme.spacings.xxlarge};
        font-size: 3.2rem;
    }
`;
export const ButtonMorePosts = styled.button`
    cursor: pointer;
    display: inline-block;
    padding: 0rem ${({ theme }) => theme.spacings.xxlarge};
    border-radius: 0.5rem;
    line-height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
`;
