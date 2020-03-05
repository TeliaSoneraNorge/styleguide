import React, { Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { CART_ITEM_TYPE_SUBTILE, CART_ITEM_TYPE } from './index';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartHeadings from './ShoppingCartTableHeadings';
import ShoppingCartTableFooter from './ShoppingCartTableFooter';

const sortShoppingCart = item => {
  const cartItemTypes = {
    WEBDEAL: 1,
    HANDSET: 2,
    WEARABLE: 3,
    SUBSCRIPTION: 4,
    SUBSCRIPTION_EXISTING_MEMBER: 5,
    SUBSCRIPTION_DRAFT: 6,
    SIM: 7,
    NEW_NUMBER: 8,
    SERVICE: 9,
    ACCESSORY: 10,
    DELIVERY: 11,
  };

  return cartItemTypes[item.type];
};

const ShoppingCartTableBody = ({ children }) => (
  <tbody className="shopping-cart__table__body" role="rowgroup">
    {children}
  </tbody>
);

const ShoppingCartTableGroup = ({
  cartItem,
  onChangeQuantity,
  onRemoveItem,
  shouldShowQuantity,
  hasPaid,
  isCheckout,
  formatPrice,
}) => {
  const renderCartItem = (item, isSubItem = false) => {
    return (
      <Fragment key={item.id}>
        <ShoppingCartItem
          cartItem={item}
          isSubItem={isSubItem}
          isSubtile={CART_ITEM_TYPE_SUBTILE.includes(item.type)}
          isDraft={item.type === CART_ITEM_TYPE.SUBSCRIPTION_DRAFT}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          isCheckout={isCheckout}
          shouldShowQuantity={shouldShowQuantity}
          hasPaid={hasPaid}
          formatPrice={formatPrice}
        />
        {!_.isEmpty(item.items) &&
          _.sortBy(item.items, [sortShoppingCart]).map(subItem => renderCartItem(subItem, true))}
      </Fragment>
    );
  };
  return <ShoppingCartTableBody>{renderCartItem(cartItem)}</ShoppingCartTableBody>;
};

const ShoppingCartTable = ({
  cartItems,
  isAnyCartItemsQuantityModifiable,
  onChangeQuantity,
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  hasPaid,
  isCheckout,
  formatPrice,
}) => {
  return (
    <table className="shopping-cart__table" role="table">
      <ShoppingCartHeadings shouldShowQuantity={isAnyCartItemsQuantityModifiable} />
      {_.sortBy(cartItems, [sortShoppingCart]).map(item => (
        <ShoppingCartTableGroup
          cartItem={item}
          key={`${item.id}-${item.bundleId}`}
          item={item}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          hasPaid={hasPaid}
          isCheckout={isCheckout}
          shouldShowQuantity={isAnyCartItemsQuantityModifiable}
          formatPrice={formatPrice}
        />
      ))}
      <ShoppingCartTableFooter
        totalPriceMonthly={totalPriceMonthly}
        totalPriceUpfront={totalPriceUpfront}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        hasPaid={hasPaid}
        formatPrice={formatPrice}
      />
    </table>
  );
};

ShoppingCartTable.propTypes = {
  cartItems: PropTypes.array,
  isAnyCartItemsQuantityModifiable: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  hasPaid: PropTypes.bool,
  isCheckout: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartTable;
