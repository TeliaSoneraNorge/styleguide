import React, { Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { CART_ITEM_TYPE } from './index';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartHeadings from './ShoppingCartTableHeadings';
import ShoppingCartTableFooter from './ShoppingCartTableFooter';

const sortShoppingCart = (item) => {
  const cartItemTypes = {
    WEBDEAL: 10,
    HANDSET: 20,
    TABLET: 30,
    MODEM: 40,
    WEARABLE: 50,
    CONNECTED_DEVICE: 60,
    SUBSCRIPTION: 70,
    SUBSCRIPTION_DRAFT: 70,
    SPECIALPRODUCT: 71,
    SIM: 80,
    NEW_NUMBER: 90,
    SERVICE: 100,
    ACCESSORY: 110,
    DELIVERY: 120,
    VOUCHER: 130,
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
  formatPrice,
}) => {
  const renderCartItem = (item, isSubItem = false) => {
    return (
      <Fragment key={item.id}>
        <ShoppingCartItem
          cartItem={item}
          isSubItem={isSubItem}
          isDraft={item.type === CART_ITEM_TYPE.SUBSCRIPTION_DRAFT}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          shouldShowQuantity={shouldShowQuantity}
          hasPaid={hasPaid}
          formatPrice={formatPrice}
        />
        {!_.isEmpty(item.items) &&
          _.sortBy(item.items, [sortShoppingCart]).map((subItem) => renderCartItem(subItem, true))}
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
  formatPrice,
  discount,
}) => (
  <table className="shopping-cart__table" role="table">
    <ShoppingCartHeadings shouldShowQuantity={isAnyCartItemsQuantityModifiable} />
    {_.sortBy(cartItems, [sortShoppingCart]).map((item) => (
      <ShoppingCartTableGroup
        cartItem={item}
        key={`${item.id}-${item.bundleId}`}
        item={item}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
        hasPaid={hasPaid}
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
      discount={discount}
    />
  </table>
);

ShoppingCartTable.propTypes = {
  cartItems: PropTypes.array,
  isAnyCartItemsQuantityModifiable: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  hasPaid: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartTable;
