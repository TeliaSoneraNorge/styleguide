import React from 'react';
import { RatingStars } from '../../index';

interface ReviewHeaderProps {
  name: string;
  rating: number;
  timestamp: string;
  buyTimestamp?: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({ name, rating, timestamp, buyTimestamp }) => (
  <div className="review-header">
    <div className="review-header__wrapper">
      <div className="review-header__title">
        <div>
          <span className="review-header__name">{name}</span>
          <span className="review-header__timestamp">
            {'• '}
            {timestamp}
          </span>
        </div>
        <RatingStars rating={rating} height={20} width={20} />
      </div>
      <div>
        <span>{buyTimestamp}</span>
      </div>
    </div>
  </div>
);
