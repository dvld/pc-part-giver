import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

export const StyledCustomButton = tw(motion.div)`
  py-3
  px-8
  rounded
  inner-shadow
  ${(props) => {
    if (props.primary) return 'bg-black text-white';
    if (props.inverted) return 'bg-white text-black';
  }}
`;
