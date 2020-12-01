import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';
import ShoppingCartCell from './ShoppingCartCell';
import ShoppingCartRow from './ShoppingCartRow';
import cn from 'classnames';

const ShoppingCartTableFooterRow = ({ label, price, type, id, className }) => (
  <ShoppingCartRow
    className={cn('shopping-cart__table__foot__row', className, {
      'shopping-cart__table__foot__row--monthly': type === 'MONTHLY',
    })}
    id={id}
  >
    <ShoppingCartColumnHeading className="shopping-cart__table__cell" colSpan={2} scope="row">
      {label}
    </ShoppingCartColumnHeading>
    <ShoppingCartCell className="shopping-cart__table__foot__cell">
      <div className="shopping-cart__item__price__container">
        <span>{price}</span>
      </div>
    </ShoppingCartCell>
    <ShoppingCartCell className="shopping-cart__item__delete"></ShoppingCartCell>
  </ShoppingCartRow>
);

const ShoppingCartTableFooter = ({
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  hasPaid,
  formatPrice,
}) => (
  <tfoot className="shopping-cart__table__foot" role="rowgroup">
    {!!totalPriceMonthly && (
      <ShoppingCartTableFooterRow
        className="shopping-cart__id--monthly"
        label="Pr. måned:"
        price={formatPrice(totalPriceMonthly)}
        type="MONTHLY"
      />
    )}
    {!!totalPriceUpfront && hasPaid && (
      <ShoppingCartTableFooterRow
        className="shopping-cart__id--upfrontpaid"
        label="Betalt:"
        price={formatPrice(totalPriceUpfront)}
      />
    )}
    {!!totalPriceUpfront && !hasPaid && (
      <ShoppingCartTableFooterRow
        className="shopping-cart__id--upfront"
        label="Betales nå:"
        price={formatPrice(totalPriceUpfront)}
      />
    )}
    {!!totalPriceFirstInvoice && (
      <ShoppingCartTableFooterRow
        label="Betales på første faktura:"
        price={formatPrice(totalPriceFirstInvoice)}
        className="shopping-cart__id--firstinvoice"
      />
    )}
  </tfoot>
);

ShoppingCartTableFooter.propTypes = {
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  hasPaid: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartTableFooter;
