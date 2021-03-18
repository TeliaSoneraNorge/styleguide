import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ShoppingCartRow = ({ children, className, id }) => (
  <article
    id={id}
    className={classnames('shopping-cart-section__table__row', {
      [className]: className,
    })}
  >
    {children}
  </article>
);

ShoppingCartRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ShoppingCartRow;
