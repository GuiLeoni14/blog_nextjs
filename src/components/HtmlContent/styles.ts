import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    iframe[src*='ads'] {
      display: none;
    }

    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 2.8rem;

    h2 {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 0.1rem solid ${theme.colors.gray_5};
    }

    h2:not(#topic-0) {
      margin-top: 4rem;
    }

    p {
      margin: 1.6rem 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    /* code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    pre code {
      color: inherit;
      background: inherit;
    } */

    p > code {
      border-radius: 4px;
      font-size: 1.4rem;
      font-family: 'Fira code', 'Inter', sans-serif;
      padding: 3px 6px;
      color: ${theme.colors.gray_2};
      background-color: ${theme.colors.gray_5};
      transition: color 0.5s, background-color 0.5s;
      .token.operator {
        color: ${theme.colors.gray_1};
      }
      .token.punctuation {
        color: ${theme.colors.gray_1};
      }
    }

    img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.medium} 0;
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.primary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }
    ul {
      li {
        list-style-type: disc;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 175%;
        &:not(:last-child) {
          margin-bottom: 1.6rem;
        }
      }
    }
    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        max-width: 100%;
        float: none;
        margin: 0;
      }
    }
  `}
`;
