import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  column-gap: 3rem;
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;
