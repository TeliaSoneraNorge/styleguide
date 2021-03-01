import React from 'react';
import { Review } from '../../index';

export default {
  title: 'Component library/Molecules/Review',
  component: Review,
};

const { ReviewHeader, ReviewBody } = Review;

export const Default = () => (
  <Review>
    <ReviewHeader buyTimestamp="20 Sept 2020" rating={5} name="Jan Erik" timestamp="22. Sept 2020"></ReviewHeader>
    <ReviewBody votesUp={10} votesDown={10} text="Fantastisk produkt!"></ReviewBody>
  </Review>
);
