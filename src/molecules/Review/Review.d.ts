import * as React from 'react';

export interface ReviewProps {
  children?: React.ReactNode;
}

export interface ReviewHeaderProps {
  name: string;
  rating: number;
  timestamp: string;
  buyTimestamp: string;
}

export interface ReviewBodyProps {
  text: string;
  votesUp: number;
  votesDown: number;
}

declare const Review: React.FC<ReviewProps> & {
  ReviewHeader: React.FC<ReviewHeaderProps>;
  ReviewBody: React.FC<ReviewBodyProps>;
};

export default Review;
