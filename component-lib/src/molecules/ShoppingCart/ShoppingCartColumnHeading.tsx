import React from 'react';

type Props = {
    children?: React.ReactNode;
    colSpan?: number;
    scope?: string;
};

const ShoppingCartColumnHeading = ({ children, colSpan, scope = 'col', ...rest }: Props) => (
  <th
    className="shopping-cart__table__header"
    colSpan={colSpan}
    role={scope === 'row' ? 'rowheader' : 'columnheader'}
    scope={scope}
    {...rest}
  >
    {children}
  </th>
);

export default ShoppingCartColumnHeading;
