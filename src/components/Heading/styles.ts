import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
    xsmall: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.small};
    `,
    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.medium};
    `,
    medium: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.large};
    `,
    big: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xlarge};
    `,
    huge: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xhuge};
    `,
};

export const Title = styled.h1<HeadingProps>`
    ${({ theme, colorDark, size, uppercase }) => css`
        color: ${colorDark ? theme.colors.text : theme.colors.white};
        line-height: 1.2;
        ${size && titleSize[size](theme)};
        text-transform: ${uppercase ? 'uppercase' : 'none'};
    `}
`;
