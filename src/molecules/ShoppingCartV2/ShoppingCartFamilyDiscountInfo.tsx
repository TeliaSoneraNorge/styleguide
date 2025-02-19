import React from 'react';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';

const ShoppingCartFamilyDiscountInfo = ({ name, link }: { name?: string; link?: JSX.Element }) => (
  <div className="shopping-cart-family-discount-info">
    <div className="shopping-cart-family-discount-info__heading-container">
      <Icon className="shopping-cart-family-discount-info__heading-icon" icon={name ? 'lightbulb' : 'money-krone'} />
      <Heading tag="h3" size="s">
        {name ? `Hei ${name}!` : 'Du kan få rabatt'}
      </Heading>
    </div>
    <div className="shopping-cart-family-discount-info__content">
      Visste du at hvis du legger til flere abonnement hos oss får du familierabatt?
    </div>
    {link}
  </div>
);

export default ShoppingCartFamilyDiscountInfo;
