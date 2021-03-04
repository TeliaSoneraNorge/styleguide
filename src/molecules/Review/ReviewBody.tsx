import React from 'react';
import { Paragraph, LikeIcon } from '../../index';
interface ReviewBodyProps {
  text: string;
  votesUp?: number;
  votesDown?: number;
}

export const ReviewBody: React.FC<ReviewBodyProps> = ({ text, votesUp, votesDown }) => (
  <div className="telia-review-body">
    <div className="telia-review-body__wrapper">
      <Paragraph>{text}</Paragraph>
      <div className="telia-review-body__likes">
        {!!votesUp && (
          <div className="telia-review-body__like">
            <LikeIcon className="telia-review-body__like--up" />
            <span>{votesUp}</span>
          </div>
        )}
        {!!votesDown && (
          <div className="telia-review-body__like">
            <LikeIcon className="telia-review-body__like--down" />
            <span>{votesDown}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);
