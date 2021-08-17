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
    <div className='relative bg-gray-50 overflow-hidden'>
      <FlexCard {...heroContent} />
      <FlexCard {...xfiContent} />
      <FlexCard {...rewardsContent} />
      <FlexCard {...appContent} />
      <FlexCard {...benefitsContent} />
    </div>
  );
};

export default FlexCardContainer;
