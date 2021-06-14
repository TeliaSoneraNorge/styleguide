import React from 'react';
import { RatingStars, RatingWithNumbers } from './Rating';

export default {
  title: 'Component library/Molecules/Rating',
  component: RatingStars,
  subcomponents: { RatingWithNumbers },
};

export const Rating = () => <RatingStars height={20} width={20} rating={2.5} />;

export const RatingFullStar = () => <RatingStars height={20} width={20} rating={4} />;

export const RatingNumbers = () => (
  <RatingStars rating={4.5} height={20} width={20} reviewComments={0}>
    <RatingWithNumbers rating={4.5} numberOfRatings={49} />
  </RatingStars>
);

export const RatingNumbersWithClick = () => (
  <RatingStars onClick={Alert} height={20} width={20} rating={4.5} reviewComments={5}>
    <RatingWithNumbers rating={4.5} numberOfRatings={49} />
  </RatingStars>
);

const Alert = () => {
  alert('Clicked');
};
