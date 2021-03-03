import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/index';
import { Heading } from '../../index';

export type RatingProps = {
  /**
   * Number of stars
   */
  rating: number;
  height: number;
  width: number;
  children?: React.ReactNode;
  href?: string;
  linkName?: string;
  /**
   * Number of stars
   */
  reviewComments?: number;
};

export type RatingWithNumbersProps = {
  rating: number;
  numberOfRatings: number;
};

export const RatingStars = ({ rating, height, width, children, linkName, href, reviewComments }: RatingProps) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {[...Array(5)].map((star, index) => {
          if (index < rating) {
            return (
              <SvgIcon
                style={{ height: height, width: width }}
                key={index}
                className="svg-icon--yellow"
                iconName="star-filled"
              />
            );
          } else {
            return (
              <SvgIcon
                style={{ height: height, width: width }}
                key={index}
                className="svg-icon--dark-grey"
                iconName="star-filled"
              />
            );
          }
        })}
        {children}
      </div>
      {reviewComments && (
        <span className="rating__link">
          <a href={href}>
            {linkName} {`(${reviewComments})`}
          </a>
        </span>
      )}
    </div>
  );
};

export const RatingWithNumbers = ({ rating, numberOfRatings }: RatingWithNumbersProps) => (
  <div className="rating-numbers">
    <Heading tag="h5">{rating}</Heading> {`(${numberOfRatings})`}
  </div>
);
