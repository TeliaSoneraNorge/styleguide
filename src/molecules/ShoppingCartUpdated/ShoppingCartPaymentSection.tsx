import React from 'react';
import { isEmpty } from 'lodash';
import { ICartDelivery } from './types';
import { Icon } from '../../atoms/Icon';

export interface ShoppingCartPaymentSectionProps {
  delivery?: ICartDelivery;
  totalPriceFirstInvoice: number;
  totalPriceMonthly: number;
  totalPriceUpfront: number;
  totalVAT?: number;
  totalPriceWithoutVAT?: number;
  formatPrice: (price: string | number) => string;
}

export default function ShoppingCartPaymentSection({
  delivery,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  formatPrice,
}: ShoppingCartPaymentSectionProps) {
  return (
    <section className="telia-shopping-cart__section telia-shopping-cart__section--grey">
      <div className="telia-shopping-cart__section-inner">
        {delivery && !isEmpty(delivery) && (
          <div className="telia-shopping-cart__delivery-container">
            <div className="telia-shopping-cart__delivery-left">
              <Icon icon={delivery.icon || 'delivery'} className="telia-shopping-cart__delivery-icon" />
              Levering
            </div>
            <span className="telia-shopping-cart__label-medium">{delivery.label}</span>
          </div>
        )}
      </div>
      {totalPriceUpfront && (
        <div className="telia-shopping-cart__price-upfront-container">
          {totalPriceWithoutVAT && (
            <div className="telia-shopping-cart__price-upfront-row">
              <span className="telia-shopping-cart__label-medium">Sum:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceWithoutVAT)}</span>
            </div>
          )}
          {totalVAT && (
            <div className="telia-shopping-cart__price-upfront-row">
              <span className="telia-shopping-cart__label-medium">MVA:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalVAT)}</span>
            </div>
          )}
          <div className="telia-shopping-cart__price-upfront-row">
            <span className="telia-shopping-cart__label-medium">Betale nå:</span>
            <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceUpfront)}</span>
          </div>
        </div>
      )}
    </section>
  );
}
