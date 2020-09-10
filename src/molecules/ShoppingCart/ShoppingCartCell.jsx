import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ShoppingCartCell = ({ children, className }) => (
  <td className={classnames('shopping-cart__table__cell', className)} role="cell">
    {children}
  </td>
);

ShoppingCartCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ShoppingCartCell;
