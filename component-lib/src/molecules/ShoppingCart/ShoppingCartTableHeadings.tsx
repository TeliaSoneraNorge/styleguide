import React from 'react';
import ShoppingCartRow from './ShoppingCartRow';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';

type Props = {
    shouldShowQuantity?: boolean;
};

const ShoppingCartHeadings = ({ shouldShowQuantity }: Props) => (
  <thead className="shopping-cart__table__head" role="rowgroup">
    <ShoppingCartRow>
      <ShoppingCartColumnHeading>Produkt</ShoppingCartColumnHeading>
      {shouldShowQuantity && <ShoppingCartColumnHeading>Antall</ShoppingCartColumnHeading>}
      <ShoppingCartColumnHeading>Pris</ShoppingCartColumnHeading>
      <ShoppingCartColumnHeading>Fjern</ShoppingCartColumnHeading>
    </ShoppingCartRow>
  </thead>
);

export default ShoppingCartHeadings;
