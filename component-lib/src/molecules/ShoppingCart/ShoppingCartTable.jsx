import React, { Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { CART_ITEM_TYPE_SUBTILE } from './index';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartHeadings from './ShoppingCartTableHeadings';
import ShoppingCartTableFooter from './ShoppingCartTableFooter';

const sortShoppingCart = item => {
  const cartItemTypes = {
    WEBDEAL: 1,
    HANDSET: 2,
    WEARABLE: 3,
    SUBSCRIPTION: 4,
    SUBSCRIPTION_EXISTING_MEMBER: 4,
    SIM: 5,
    NEW_NUMBER: 6,
    SERVICE: 7,
    ACCESSORY: 8,
    DELIVERY: 9,
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
  isAnyCartItemsRemovable,
  formatPrice,
}) => {
  const renderCartItem = (item, isSubItem = false) => {
    return (
      <Fragment key={item.id}>
        <ShoppingCartItem
          cartItem={item}
          isSubItem={isSubItem}
          isSubtile={CART_ITEM_TYPE_SUBTILE.includes(item.type)}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          isAnyCartItemsRemovable={isAnyCartItemsRemovable}
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
  isAnyCartItemsRemovable,
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
          isAnyCartItemsRemovable={isAnyCartItemsRemovable}
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
  isAnyCartItemsRemovable: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartTable;
