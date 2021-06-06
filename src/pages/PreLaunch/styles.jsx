import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const PageContainer = tw(motion.div)`
  flex
  flex-col
  justify-center
  items-center
  font-display
  border-2
  border-black
`;

export const BannerImage = tw(motion.img)`
  w-80
  mx-40
  border-2
  border-black
`;

const divWithTextShadow = styled(motion.div)`
  text-shadow: 1px 2px 4px rgba(5, 5, 5, 0.7);
`;

export const TextContainer = tw(divWithTextShadow)`
  flex
  flex-col
  justify-center
  items-center
  text-gray-900
  my-60
  mx-20
`;

export const WelcomeHeader = tw(motion.h1)`
  text-5xl
  my-20
`;

export const Content = tw(motion.p)`
  text-2xl
  mx-64
  px-80
  text-center
  mb-20
`;

export const DescriptionHeader = tw(motion.h2)`
  text-4xl
  my-20
`;
