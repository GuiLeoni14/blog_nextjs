import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        max-width: 100%;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`;
