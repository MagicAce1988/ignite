import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    width: 0.5rem;
    background: white;
  }
`;

export const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

export const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled(motion.div)`
  text-align: center;
`;

export const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

export const Media = styled(motion.div)`
  margin-top: 1rem;

  img {
    width: 100%;
  }
`;

export const Description = styled(motion.div)`
  margin: 2rem 0rem;
`;
