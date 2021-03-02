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
  link?: string;
  reviewComments?: number;
};

export interface RatingWithNumbersProps {
  rating: number;
  reviews: number;
}

export const RatingStars = ({ rating, height, width, children, link, href, reviewComments }: RatingProps) => {
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
            {link} {`(${reviewComments})`}
          </a>
        </span>
      )}
    </div>
  );
};

export const RatingWithNumbers: React.FC<RatingWithNumbersProps> = ({ rating, reviews }) => (
  <div className="rating-numbers">
    <Heading tag="h5">{rating}</Heading> {`(${reviews})`}
  </div>
);
