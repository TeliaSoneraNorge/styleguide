import React from 'react';
import { RatingStars, CheckMarkCircleIcon, Heading } from '../../index';

interface ReviewHeaderProps {
  name: string;
  rating: number;
  timestamp: string;
  buyTimestamp?: string;
}

interface ReviewBuyerProps {
  buyTimestamp: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({ name, rating, timestamp, buyTimestamp }) => (
  <div className="telia-review-header">
    <div className="telia-review-header__wrapper">
      <div className="telia-review-header__title">
        <div>
          <span className="telia-review-header__name">{name}</span>
          <span className="telia-review-header__timestamp">
            {'• '}
            {timestamp}
          </span>
        </div>
        <RatingStars rating={rating} height={20} width={20} />
      </div>
      {buyTimestamp && <BuyerTimestamp buyTimestamp={buyTimestamp} />}
    </div>
  </div>
);

const BuyerTimestamp = ({ buyTimestamp }: ReviewBuyerProps) => (
  <div className="telia-review-header__buyertag">
    <span className="telia-review-header__buyertag--header">
      <CheckMarkCircleIcon />
      <Heading tag="h6">KJØPER</Heading>
    </span>
    <span className="telia-review-header__buyertag--timestamp">{buyTimestamp}</span>
  </div>
);
