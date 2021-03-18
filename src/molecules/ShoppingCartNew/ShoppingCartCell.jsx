import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ShoppingCartCell = ({ children, className }) => (
  <div className={classnames('shopping-cart-section__table__cell', className)}>{children}</div>
);

ShoppingCartCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ShoppingCartCell;
