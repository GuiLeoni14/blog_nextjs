import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const TagsContainer = styled.div`
    ${({ theme }) => css`
        padding: 0 ${theme.spacings.large};
    `}
`;
export const ContentRelated = styled.div`
    margin-top: 4rem;
    & > h4 {
        margin-bottom: 2rem;
        font-size: 2.8rem;
    }
`;
