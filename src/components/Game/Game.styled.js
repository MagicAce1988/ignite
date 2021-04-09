import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
