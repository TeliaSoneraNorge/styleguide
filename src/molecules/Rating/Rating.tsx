import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/index';
import Button from '../../atoms/Button';

export interface RatingProps {
  /**
   * Number of stars
   */
  rating: number;
  height: number;
  width: number;
  children?: React.ReactNode;
  /**
   * Number of comments.
   * This shows the component to be clickable if there are comments
   */
  reviewComments?: number;
}

export interface RatingWithNumbersProps {
  rating: number;
  numberOfRatings: number;
  numberOfReviews?: number;
  onClick?: React.MouseEventHandler;
}

export const RatingStars = ({ rating, height, width, reviewComments, children }: RatingProps) => {
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
      <div className={reviewComments ? 'telia-rating__stars--reviews' : 'telia-rating__stars'}>
        {renderFullStars()}
        {renderHalfStars()}
        {renderEmptyStars()}
        {children}
      </div>
    </div>
  );
};

export const RatingWithNumbers = ({ rating, numberOfRatings, numberOfReviews, onClick }: RatingWithNumbersProps) => (
  <div className="telia-rating-numbers">
    <p className="telia-rating-numbers__rating">{rating}</p>
    <p className="telia-rating-numbers__ratingNumber">{`(${numberOfRatings})`}</p>
    {numberOfReviews && (
      <Button
        onClick={onClick ? onClick : undefined}
        className="telia-rating-numbers__reviewNumber"
        kind="link"
        text={`Omtaler (${numberOfReviews})`}
      />
    )}
  </div>
);
