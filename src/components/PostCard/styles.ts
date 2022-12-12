import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  img {
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  p {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
