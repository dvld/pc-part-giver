import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

export const ContestCardContainer = tw(motion.div)`
  container
  rounded-xl
  w-80
  h-80
  relative
  bg-white
  shadow-xl
`;

export const ContestCardImage = tw(motion.img)`
  w-full
  h-full
  rounded-xl
`;

export const ContestCardOverlay = tw(motion.div)`
  block  
  absolute
  w-full
  h-full
  bg-white
  top-0
  left-0
  shadow-inner
`;

export const ContestCardEntryCounter = tw(motion.div)``;

export const ContestCardTitle = tw(motion.h2)``;
