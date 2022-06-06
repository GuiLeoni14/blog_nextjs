import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Grid = styled(motion.div)`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: 5rem;
`;
