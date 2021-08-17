import React from 'react';
import {
  heroContent,
  xfiContent,
  rewardsContent,
  appContent,
  benefitsContent,
} from '../data';
import FlexCard from './FlexCard';

const FlexCardContainer = () => {
  return (
    <>
      <FlexCard {...heroContent} />
      <FlexCard {...xfiContent} />
      <FlexCard {...rewardsContent} />
      <FlexCard {...appContent} />
      <FlexCard {...benefitsContent} />
    </>
  );
};

export default FlexCardContainer;
