import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';
import ShoppingCartCell from './ShoppingCartCell';
import ShoppingCartRow from './ShoppingCartRow';
import cn from 'classnames';

const EmptyRow = () => (
  <ShoppingCartRow className="shopping-cart-section__table__foot__row--empty shopping-cart-section__table__foot__row--empty"></ShoppingCartRow>
);

const ShoppingCartTableFooterRow = ({ label, price, priceEnding, type, id, className }) => (
  <ShoppingCartRow
    className={cn('shopping-cart-section__table__foot__row', className, {
      'shopping-cart-section__table__foot__row--monthly': type === 'MONTHLY',
      'shopping-cart-section__table__foot__row--discount': type === 'DISCOUNT',
    })}
    id={id}
  >
    <ShoppingCartColumnHeading className="shopping-cart-section__table__cell shopping-cart-section__item__label shopping-cart-section__table__foot__header">
      {label}
    </ShoppingCartColumnHeading>
    <div className="shopping-cart-section__item__price__wrapper">
      <ShoppingCartCell className="shopping-cart-section__table__foot__cell shopping-cart-section__item__price">
        <div className="shopping-cart-section__item__price__container shopping-cart-section__item__price--bold">
          <span>{price}</span>
          <span>{priceEnding}</span>
        </div>
      </ShoppingCartCell>
      <ShoppingCartCell className="shopping-cart-section__item__delete"></ShoppingCartCell>
    </div>
  </ShoppingCartRow>
);

const ShoppingCartTableFooter = ({
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  hasPaid,
  formatPrice,
  discount,
}) => (
  <div className="shopping-cart-section__table__foot">
    {/* 
    Can't add margin to rows due to 'border-spacing' being used on table, 
    need to add an empty row instead to create margin 
    */}
    <EmptyRow />
    {!!discount && (
      <ShoppingCartTableFooterRow
        label={discount.label}
        price={formatPrice(discount.price)}
        priceEnding="/md."
        className="shopping-cart-section__id--discount"
        type="DISCOUNT"
      />
    )}
    {!!totalPriceMonthly && (
      <ShoppingCartTableFooterRow
        className="shopping-cart-section__id--monthly"
        label="Å betale pr md."
        price={formatPrice(totalPriceMonthly)}
        priceEnding="/md."
        type="MONTHLY"
      />
    )}
    {!!totalPriceUpfront && hasPaid && (
      <ShoppingCartTableFooterRow
        className="shopping-cart-section__id--upfrontpaid"
        label="Betalt:"
        price={formatPrice(totalPriceUpfront)}
      />
    )}
    {!!totalPriceUpfront && !hasPaid && (
      <ShoppingCartTableFooterRow
        className="shopping-cart-section__id--upfront"
        label="Å betale nå"
        price={formatPrice(totalPriceUpfront)}
      />
    )}
    {!!totalPriceFirstInvoice && (
      <ShoppingCartTableFooterRow
        label="Å betale på første faktura"
        price={formatPrice(totalPriceFirstInvoice)}
        className="shopping-cart-section__id--firstinvoice"
      />
    )}
  </div>
);

ShoppingCartTableFooter.propTypes = {
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  hasPaid: PropTypes.bool,
  formatPrice: PropTypes.func,
  discount: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ShoppingCartTableFooter;
