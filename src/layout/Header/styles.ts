import styled, { css } from 'styled-components';

export const Container = styled.header`
    width: 100%;
    position: fixed;
    z-index: 2022;
    height: 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0.8rem 3.2rem 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.3rem);
    border: 0.1rem solid rgba(255, 255, 255, 0.18);
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ${({ theme }) =>
        theme.title === 'light'
            ? css`
                  background: rgba(255, 255, 255, 0.35);
              `
            : css`
                  background: rgba(0, 0, 0, 0.35);
              `}
    @media ${({ theme }) => theme.media.lteMedium} {
        & > div > div.search {
            display: none;
        }
    }
`;

export const Logo = styled.div`
    width: 100%;
    max-width: 10rem;
    overflow: hidden;
    img {
        width: 100%;
    }
`;

export const Progress = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    & > span {
        width: 100%;
    }
    .MuiLinearProgress-bar1Determinate {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    .MuiLinearProgress-determinate {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;
