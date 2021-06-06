import React from 'react';
import { motion } from 'framer-motion';

import { StyledCustomButton } from './styles';

const CustomButton = ({ children, ...props }) => {
  return (
    <StyledCustomButton
      {...props}
      whileHover={{ scale: [1, 1.2, 1.1] }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
