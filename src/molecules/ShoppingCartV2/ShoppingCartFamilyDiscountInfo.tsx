import React from 'react';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';

const ShoppingCartFamilyDiscountInfo = () => (
  <div className="shopping-cart-family-discount-info">
    <div className="shopping-cart-family-discount-info__heading-container">
      <Icon className="shopping-cart-family-discount-info__heading-icon" icon="money-krone" />
      <Heading tag="h3" size="s">
        Du kan få rabatt
      </Heading>
    </div>
    <div className="shopping-cart-family-discount-info__content">
      Ved å legge flere mobilabonnement i handlekurven vil du få rabatt hver måned. Du betaler fullpris kun for det
      største abonnementet, resten får du rabatt på. Få 30,-/md. for fast datamengde og 100,-/md. for ubegrenset data.
    </div>
  </div>
);

export default ShoppingCartFamilyDiscountInfo;
