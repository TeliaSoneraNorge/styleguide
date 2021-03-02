import React from 'react';
import { LikeIcon } from '../../atoms/Icon/icons/LikeIcon';

interface ReviewBodyProps {
  text: string;
  votesUp: number;
  votesDown: number;
}

export const ReviewBody: React.FC<ReviewBodyProps> = ({ text, votesUp, votesDown }) => (
  <div className="review-body">
    <div className="review-body__wrapper">
      <p>{text}</p>
      <div className="review-body__likes">
        <div className="review-body__like">
          <LikeIcon className="review-body__like--up" />
          <span>{votesUp}</span>
        </div>
        {votesDown > 0 && (
          <div className="review-body__like">
            <LikeIcon className="review-body__like--down" />
            <span>{votesDown}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);
