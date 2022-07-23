import styled, { css } from 'styled-components';

export const ContainerSkeletonCardPost = styled.div<{ pageTypeSkeleton: 'POST' | 'TEMPLATE_POST' }>`
    width: 100%;
    & > div > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
        gap: 5rem;
    }
    ${({ pageTypeSkeleton }) =>
        pageTypeSkeleton === 'TEMPLATE_POST'
            ? css`
                  .title {
                      text-align: start;
                      margin-bottom: 2rem;
                  }
                  margin: auto auto;
                  min-height: 100vh;
              `
            : css``}
`;

export const ContainerSkeletonPost = styled.div`
    width: 100%;
    height: 100%;
    & > div {
        height: 100vh;
        overflow: hidden;
        width: 100%;
        span {
        }
        .excerpt {
        }
    }
`;
