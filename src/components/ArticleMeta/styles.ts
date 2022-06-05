import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.darkerGray};
        font-style: italic;
        & > div {
            align-items: center;
            gap: 0.8rem;
            display: flex;
        }
        a {
            color: ${theme.colors.second};
            text-decoration: none;
            font-weight: bold;
            transition: all 300ms ease-in-out;
            &:hover {
                filter: brightness(50%);
            }
        }
    `}
`;
