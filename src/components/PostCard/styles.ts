import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    & > a {
        width: 100%;
    }
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const Text = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 1rem;
    p {
        font-size: 1.6rem;
    }
`;
