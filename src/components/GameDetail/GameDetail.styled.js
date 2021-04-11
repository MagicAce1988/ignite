import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardShadow = styled(motion.div)`
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Detail = styled(motion.div)`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 10;
  cursor: pointer;
  width: 80%;
  height: 85vh;
  border-radius: 1rem;
  padding: 2rem;
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
