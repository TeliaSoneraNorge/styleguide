import React from 'react';
import { RatingStars, RatingWithNumbers } from './Rating';

export default {
  title: 'Component library/Molecules/Rating',
  component: RatingStars,
  subcomponents: { RatingWithNumbers },
};

export const Rating = () => <RatingStars rating={3} height={20} width={20} />;

export const RatingNumbers = () => (
  <RatingStars rating={4} height={20} width={20} linkName="Anmeldelser" href="#" reviewComments={800}>
    <RatingWithNumbers rating={4.6} numberOfRatings={49} />
  </RatingStars>
);