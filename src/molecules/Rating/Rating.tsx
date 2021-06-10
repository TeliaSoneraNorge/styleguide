import React from 'react';
import ReactStars from 'react-stars';
export interface RatingProps {
  /**
   * Number of stars
   */
  rating: number;
  height: number;
  width: number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  /**
   * Number of comments.
   * This shows the component to be clickable if there are comments
   */
  reviewComments?: number;
}

export interface RatingWithNumbersProps {
  rating: number;
  numberOfRatings: number;
}

export const RatingStars = ({ rating, children, onClick, reviewComments }: RatingProps) => {
  return (
    <div className="telia-rating">
      <div
        onClick={onClick ? onClick : undefined}
        className={reviewComments ? 'telia-rating__stars--reviews' : 'telia-rating__stars'}
      >
        <ReactStars count={5} size={24} value={rating} edit={false} half={true} color2="#ffcd64" />
        {children}
      </div>
    </div>
  );
};

export const RatingWithNumbers = ({ rating, numberOfRatings }: RatingWithNumbersProps) => (
  <div className="telia-rating-numbers">
    <p>{rating}</p> {`(${numberOfRatings})`}
  </div>
);
