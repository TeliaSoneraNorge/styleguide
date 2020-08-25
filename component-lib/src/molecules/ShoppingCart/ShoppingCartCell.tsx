import React from 'react';
import classnames from 'classnames';

type Props = {
    children?: React.ReactNode;
    className?: string;
};

const ShoppingCartCell = ({ children, className }: Props) => (
  <td className={classnames('shopping-cart__table__cell', className)} role="cell">
    {children}
  </td>
);

export default ShoppingCartCell;
