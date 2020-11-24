import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ShoppingCartRow = ({ children, className, id }) => (
  <tr
    id={id}
    className={classnames('shopping-cart__table__row', {
      [className]: className,
    })}
    role="row"
  >
    {children}
  </tr>
);

ShoppingCartRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ShoppingCartRow;
