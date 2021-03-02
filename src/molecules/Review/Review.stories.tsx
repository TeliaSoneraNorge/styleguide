import React from 'react';
import { storiesOf } from '@storybook/react';
import { Review } from './Review';
import { ReviewHeader } from './ReviewHeader';
import { ReviewBody } from './ReviewBody';

const review = {
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis vitae minus officia, excepturi vero labore magnam facere tenetur doloribus?',
  name: 'Ola Nordmann',
  buyTimestamp: undefined,
  rating: 5,
  timestamp: '25. Sept 2020',
  votesUp: 10,
  votesDown: 1,
};

const { text, rating, name, buyTimestamp, timestamp, votesDown, votesUp } = review;

storiesOf('Component library/Molecules/Review', module).add('Default', () => {
  return (
    <Review>
      <ReviewHeader buyTimestamp={buyTimestamp} rating={rating} name={name} timestamp={timestamp}></ReviewHeader>
      <ReviewBody votesUp={votesUp} votesDown={votesDown} text={text}></ReviewBody>
    </Review>
  );
});
