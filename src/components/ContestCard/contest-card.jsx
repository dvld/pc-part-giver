import React from 'react';

import {
  ContestCardContainer,
  ContestCardImage,
  ContestCardOverlay,
} from './styles';

const ContestCard = () => {
  return (
    <ContestCardContainer>
      <ContestCardImage src='/giveaway.png' alt='Contest Card' />
      <ContestCardOverlay
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </ContestCardContainer>
  );
};

export default ContestCard;
