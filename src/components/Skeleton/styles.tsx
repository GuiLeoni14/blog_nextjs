import styled from 'styled-components';

export const ContainerSkeletonCardPost = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: 5rem;
`;
