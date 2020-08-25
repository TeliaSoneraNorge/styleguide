import React from 'react';
import classnames from 'classnames';

type Props = {
    children?: React.ReactNode;
    className?: string;
};

const ShoppingCartRow = ({ children, className }: Props) => (
  <tr
    className={classnames('shopping-cart__table__row', {
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      [className]: className,
    })}
    role="row"
  >
    {children}
  </tr>
);

export default ShoppingCartRow;
