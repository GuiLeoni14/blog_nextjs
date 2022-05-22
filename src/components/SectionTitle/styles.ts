import styled, { css } from 'styled-components';

export const Container = styled.div<{ isRed?: boolean }>`
    background-color: blue;
    ${({ isRed }) =>
        isRed &&
        css`
            background-color: red;
        `}
`;
