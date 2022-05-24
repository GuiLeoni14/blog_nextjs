import styled, { css } from 'styled-components';

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme: { spacings } }) => spacings.medium} 0rem;
    margin-bottom: ${({ theme: { spacings } }) => spacings.medium};
    border-bottom: 0.2rem solid ${({ theme: { colors } }) => colors.mediumGray};
`;

export const Excerpt = styled.p`
    font-size: ${({ theme: { font } }) => font.sizes.small};
    margin: ${({ theme: { spacings } }) => spacings.medium} 0rem;
    text-align: justify;
`;

export const Cover = styled.img`
    display: block;
    width: 100%;
    margin-bottom: ${({ theme: { spacings } }) => spacings.medium};
`;
