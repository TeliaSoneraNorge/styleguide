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

export const RatingStars = ({ rating, height, width, reviewComments, onClick, children }: RatingProps) => {
  const maxRating = 5;
  const starRatio = 1;

  const maxStars = () => {
    return Math.ceil(maxRating / starRatio);
  };

  const fullStars = () => {
    return Math.floor(rating / starRatio);
  };

  const halfStars = () => {
    const x = rating % starRatio;
    const i = (1 / 2) * starRatio;
    return x >= i ? 1 : 0;
  };

  const emptyStars = () => {
    return maxStars() - fullStars() - halfStars();
  };

  const renderFullStars = () => {
    return fullStars() !== 0
      ? Array(fullStars())
          .fill(null)
          .map((item, i) => {
            return (
              <SvgIcon
                style={{ height: height, width: width }}
                className="svg-icon--yellow"
                key={`fs${i}`}
                iconName="star-filled"
              />
            );
          })
      : '';
  };

  const renderHalfStars = () => {
    return halfStars() !== 0
      ? Array(halfStars())
          .fill(null)
          .map((item, i) => {
            return <SvgIcon className="svg-icon--yellow half-star" key={`fs${i}`} iconName="star-half" />;
          })
      : '';
  };

  const renderEmptyStars = () => {
    return emptyStars() !== 0
      ? Array(emptyStars())
          .fill(null)
          .map((item, i) => {
            return (
              <SvgIcon
                style={{ height: height, width: width }}
                className="svg-icon--yellow"
                key={`fs${i}`}
                iconName="star"
              />
            );
          })
      : '';
  };

  return (
    <div className="telia-rating">
      <div
        onClick={onClick ? onClick : undefined}
        className={reviewComments ? 'telia-rating__stars--reviews' : 'telia-rating__stars'}
      >
        {renderFullStars()}
        {renderHalfStars()}
        {renderEmptyStars()}
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
