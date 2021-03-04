import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/index';
import { Heading, Button } from '../../index';
export interface RatingProps {
  /**
   * Number of stars
   */
  rating: number;
  height: number;
  width: number;
  children?: React.ReactNode;
  linkName?: string;
  onClick?: React.MouseEventHandler;
  /**
   * Number of comments
   */
  reviewComments?: number;
}

export interface RatingWithNumbersProps {
  rating: number;
  numberOfRatings: number;
}

export const RatingStars = ({ rating, height, width, children, linkName, reviewComments, onClick }: RatingProps) => {
  return (
    <div className="telia-rating">
      <div className="telia-rating__stars">
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
      {!!reviewComments && (
        <Button
          type="button"
          className="telia-rating__link"
          onClick={onClick}
          kind="link"
          text={`${linkName} (${reviewComments})`}
        ></Button>
      )}
    </div>
  );
};

export const RatingWithNumbers = ({ rating, numberOfRatings }: RatingWithNumbersProps) => (
  <div className="telia-rating-numbers">
    <Heading tag="h5">{rating}</Heading> {`(${numberOfRatings})`}
  </div>
);
