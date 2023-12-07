import React from 'react';
import { isEmpty, size } from 'lodash';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ICartDelivery } from './types';
import { Icon } from '../../atoms/Icon';

export interface MonthlyPriceDetailsProps {
  totalPriceMonthly?: number;
  monthlyPriceDetails?: { label: string; value: string }[];
  formatPrice: (price: string | number) => string;
}

const MonthlyPriceDetails = ({ monthlyPriceDetails, totalPriceMonthly, formatPrice }: MonthlyPriceDetailsProps) => {
  if (size(monthlyPriceDetails) === 0) {
    return null;
  }

  return (
    <div className="shopping-cart-table__price-monthly-details">
      {monthlyPriceDetails?.map(({ label, value }, index) => (
        <div key={`shopping-cart-table-price-detail-${index}`} className="telia-shopping-cart__price-row">
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
      <div className="telia-shopping-cart__price-row telia-shopping-cart__price-monthly-details-total">
        <span>Totalt pr. md.</span>
        <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceMonthly || 0)}/md.</span>
      </div>
    </div>
  );
};

export interface ShoppingCartPaymentSectionProps {
  delivery?: ICartDelivery;
  totalPriceFirstInvoice?: number;
  totalPriceMonthly?: number;
  paymentTooltip?: string;
  monthlyPriceDetails?: { label: string; value: string }[];
  totalPriceUpfront?: number;
  totalVAT?: number;
  totalPriceWithoutVAT?: number;
  hasPaid?: boolean;
  formatPrice: (price: string | number) => string;
}

export default function ShoppingCartPaymentSection({
  delivery,
  totalPriceUpfront,
  totalPriceMonthly,
  totalPriceFirstInvoice,
  paymentTooltip,
  monthlyPriceDetails,
  totalVAT,
  totalPriceWithoutVAT,
  hasPaid,
  formatPrice,
}: ShoppingCartPaymentSectionProps) {
  return (
    <section className="telia-shopping-cart__section telia-shopping-cart__section--grey">
      <div className="telia-shopping-cart__section-inner">
        {delivery && !isEmpty(delivery) && (
          <div className="telia-shopping-cart__delivery-container">
            <div className="telia-shopping-cart__delivery-left">
              <Icon icon={delivery.icon || 'delivery'} className="telia-shopping-cart__delivery-icon" />
              {delivery.label || 'Levering'}
            </div>
            <span className="telia-shopping-cart__label-medium">{delivery.value}</span>
          </div>
        )}
        {delivery && !isEmpty(delivery) && !!totalPriceMonthly && (
          <hr className="telia-shopping-cart__horizontal-rule" />
        )}
        {!!totalPriceMonthly && (
          <div className="telia-shopping-cart__price-monthly-container">
            <div className="telia-shopping-cart__price-row">
              <div className="telia-shopping-cart__flex-row">
                <span className="telia-shopping-cart__label-medium">Betale pr md:</span>
                {paymentTooltip && (
                  <>
                    <a
                      data-tip
                      data-for="telia-shopping-cart-tooltip"
                      className="telia-shopping-cart__tooltip-icon-wrapper"
                    >
                      <Icon icon="info" className="telia-shopping-cart__tooltip-icon" />
                    </a>
                    <ReactTooltip
                      clickable
                      border={'#990AE3'}
                      style={{ color: '#000', backgroundColor: 'white' }}
                      className="telia-shopping-cart__tooltip"
                      place="bottom"
                      id="telia-shopping-cart-tooltip"
                    >
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: paymentTooltip }} />
                      </div>
                    </ReactTooltip>
                  </>
                )}
              </div>
              {size(monthlyPriceDetails) === 0 && (
                <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceMonthly)}/md.</span>
              )}
            </div>
            <MonthlyPriceDetails
              monthlyPriceDetails={monthlyPriceDetails}
              totalPriceMonthly={totalPriceMonthly}
              formatPrice={formatPrice}
            />
          </div>
        )}
      </div>
      {(!!totalPriceUpfront || !!totalPriceFirstInvoice) && (
        <div className="telia-shopping-cart__price-upfront-container">
          {!!totalPriceWithoutVAT && (
            <div className="telia-shopping-cart__price-row">
              <span className="telia-shopping-cart__label-medium">Sum:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceWithoutVAT)}</span>
            </div>
          )}
          {!!totalVAT && (
            <div className="telia-shopping-cart__price-row">
              <span className="telia-shopping-cart__label-medium">MVA:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalVAT)}</span>
            </div>
          )}
          {!!totalPriceUpfront && !hasPaid && (
            <div className="telia-shopping-cart__price-row">
              <span className="telia-shopping-cart__label-medium">Betale nå:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceUpfront)}</span>
            </div>
          )}
          {!!totalPriceUpfront && hasPaid && (
            <div className="telia-shopping-cart__price-row">
              <span className="telia-shopping-cart__label-medium">Betalt:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceUpfront)}</span>
            </div>
          )}
          {!!totalPriceFirstInvoice && (
            <div className="telia-shopping-cart__price-row">
              <span className="telia-shopping-cart__label-medium">Å betale på første faktura:</span>
              <span className="telia-shopping-cart__label-medium">{formatPrice(totalPriceFirstInvoice)}</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
