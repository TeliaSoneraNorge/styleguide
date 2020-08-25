import React from 'react';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';
import ShoppingCartCell from './ShoppingCartCell';
import ShoppingCartRow from './ShoppingCartRow';
import cn from 'classnames';

const ShoppingCartTableFooterRow = ({
  label,
  price,
  type
}: any) => (
  <ShoppingCartRow className={cn("shopping-cart__table__foot__row", {"shopping-cart__table__foot__row--monthly" : type === "MONTHLY" })}>
    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
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

type ShoppingCartTableFooterProps = {
    totalPriceFirstInvoice?: number;
    totalPriceMonthly?: number;
    totalPriceUpfront?: number;
    hasPaid?: boolean;
    formatPrice?: (...args: any[]) => any;
};

const ShoppingCartTableFooter = ({ totalPriceFirstInvoice, totalPriceMonthly, totalPriceUpfront, hasPaid, formatPrice, }: ShoppingCartTableFooterProps) => (
  <tfoot className="shopping-cart__table__foot" role="rowgroup">
    {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
    {!!totalPriceMonthly && <ShoppingCartTableFooterRow label="Pr. måned:" price={formatPrice(totalPriceMonthly)} type="MONTHLY" />}
    {!!totalPriceUpfront && hasPaid && (
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      <ShoppingCartTableFooterRow label="Betalt:" price={formatPrice(totalPriceUpfront)} />
    )}
    {!!totalPriceUpfront && !hasPaid && (
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      <ShoppingCartTableFooterRow label="Betales nå:" price={formatPrice(totalPriceUpfront)} />
    )}
    {!!totalPriceFirstInvoice && (
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      <ShoppingCartTableFooterRow label="Betales på første faktura:" price={formatPrice(totalPriceFirstInvoice)} />
    )}
  </tfoot>
);

export default ShoppingCartTableFooter;
