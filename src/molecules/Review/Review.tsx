import React from 'react';
import PropTypes from 'prop-types';

interface ReviewProps {
  children?: React.ReactNode;
}

export const Review: React.FC<ReviewProps> = ({ children }) => <div className="review">{children}</div>;

Review.propTypes = {
  children: PropTypes.node,
};
