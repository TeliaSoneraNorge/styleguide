import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LikeIcon } from '../../atoms/Icon/icons/LikeIcon';

const Review = ({ children }) => <div className="review">{children}</div>;

const ReviewHeader = ({ name, rating, timestamp, buyTimestamp }) => (
  <div className="review__header">
    <p>
      {name} - {timestamp}
    </p>
    {rating}
  </div>
);

const ReviewBody = ({ text, votesUp, votesDown }) => (
  <div className="review__body">
    <p>{text}</p>
    <div>
      <>
        <LikeIcon />
        {votesUp}
      </>
      <>
        <LikeIcon />
        {votesDown}
      </>
    </div>
  </div>
);

Review.ReviewHeader = ReviewHeader;
Review.ReviewBody = ReviewBody;

Review.propTypes = {
  children: PropTypes.node,
};

Review.ReviewHeader.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  buyTimestamp: PropTypes.string,
  rating: PropTypes.number,
};

Review.ReviewBody.propTypes = {
  text: PropTypes.string,
  votesup: PropTypes.number,
  votesdown: PropTypes.number,
};

export default Review;
