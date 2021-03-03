import React from 'react';
import { LikeIcon, Paragraph } from '../../index';
interface ReviewBodyProps {
  text: string;
  votesUp: number;
  votesDown: number;
}

export const ReviewBody: React.FC<ReviewBodyProps> = ({ text, votesUp, votesDown }) => (
  <div className="telia-review-body">
    <div className="telia-review-body__wrapper">
      <Paragraph>{text}</Paragraph>
      <div className="telia-review-body__likes">
        <div className="telia-review-body__like">
          <LikeIcon className="telia-review-body__like--up" />
          <span>{votesUp}</span>
        </div>
        {votesDown > 0 && (
          <div className="telia-review-body__like">
            <LikeIcon className="telia-review-body__like--down" />
            <span>{votesDown}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);
