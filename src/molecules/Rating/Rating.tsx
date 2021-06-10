import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/index';
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

export const RatingStars = ({ rating, height, width, children, onClick, reviewComments }: RatingProps) => {
  return (
    <div className="telia-rating">
      <div
        onClick={onClick ? onClick : undefined}
        className={reviewComments ? 'telia-rating__stars--reviews' : 'telia-rating__stars'}
      >
        {[...Array(5)].map((_star, index) => {
          return (
            <SvgIcon
              style={{ height: height, width: width }}
              key={index}
              className={index < rating ? 'svg-icon--yellow' : 'svg-icon--dark-grey'}
              iconName="star-filled"
            />
          );
        })}
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
