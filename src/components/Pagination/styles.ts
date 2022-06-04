import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
export const PaginationNumber = styled.div``;
export const PaginationButton = styled.button`
    cursor: pointer;
    font-size: 2rem;
    padding: 0rem 2rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.second};
`;
