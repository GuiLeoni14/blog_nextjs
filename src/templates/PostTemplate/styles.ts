import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const TagsContainer = styled.div`
    ${({ theme }) => css`
        padding: 0 ${theme.spacings.large};
    `}
`;
