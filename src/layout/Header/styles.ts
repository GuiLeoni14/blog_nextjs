import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const SearchInput = styled.input`
    padding: 0.5rem ${({ theme }) => theme.spacings.large};
`;
