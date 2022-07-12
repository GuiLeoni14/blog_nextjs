import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: ${({ theme }) => theme.font.family.default};
    }
    *:not(svg, path){
        color: ${({ theme: { colors } }) => colors.text};
    }
    body{
        transition: background .3s;
        background-color: ${({ theme: { colors } }) => colors.background};
        color: ${(props) => props.theme.colors.text};
    }
    h1, h2, h3, h4, h5, h6 {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    }
    p{
        color: ${({ theme }) => theme.colors.text};
        font-size: 'Open sans', sans-serif;
    }
    img {
        max-width: 100%;
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        @media ${({ theme }) => theme.media.lteMedium} {
            font-size: 50%;
        }
    }
    section{
        width: 100%;
    }
    button {
        cursor: pointer;
    }
    .Toastify__toast--warning {
        background-color: ${({ theme }) => theme.colors.background};
        .Toastify__progress-bar{
            background-color: ${({ theme }) => theme.colors.primary};
        }
    }
`;
