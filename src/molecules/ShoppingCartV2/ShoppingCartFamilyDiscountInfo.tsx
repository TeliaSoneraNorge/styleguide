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
    <div>
      Hvis du legger til flere abonnement hos oss får du rabatt. En fast rabatt (30,-/md. for fast datamengde og
      100,-/md. for ubegrenset)
    </div>
  </div>
);

export default ShoppingCartFamilyDiscountInfo;
