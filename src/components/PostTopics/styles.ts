import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 0rem;
  border-bottom: 0.2rem solid ${({ theme: { colors } }) => colors.primary};
`;
export const Topics = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  span {
    font-size: 1.6rem;
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding-left: 2rem;
    &::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
      left: 0rem;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
