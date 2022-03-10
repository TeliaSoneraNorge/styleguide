import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import ShoppingCartCell from './ShoppingCartCell';
import ShoppingCartRow from './ShoppingCartRow';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';
import ShoppingCartItemQuantityPicker from './ShoppingCartItemQuantityPicker';
import { CART_ITEM_TYPE } from './index';
import { Icon } from '../../atoms/Icon';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartItemsSection = ({
  cartItems,
  isSubItem = false,
  onChangeQuantity,
  onRemoveItem,
  shouldShowQuantity,
  hasPaid,
  formatPrice,
}) => {
  const { id, leaseMonths, name, lineThrough, subtitle, price, discount, type, indent } = cartItems;
  const quantity = _.get(cartItems, 'quantity.value', 1);
  const isQuantityModifiable = _.get(cartItems, 'quantity.modifiable');
  const isRemovable = _.get(cartItems, 'quantity.removable');
  const shouldShowPricePerUnit = (!!price.upfront || !!price.firstInvoice) && quantity > 1;
  const discountValueUpfront = _.get(discount, 'value.upfront') || 0;
  const discountValueMonthly = _.get(discount, 'value.monthly') || 0;
  const hasGroupDiscount = _.get(discount, 'hasGroupDiscount', false);
  const isDraft = type === CART_ITEM_TYPE.SUBSCRIPTION_DRAFT || _.get(cartItems, 'status.isDraft');
  const isActive = _.get(cartItems, 'status.isActive');

  return (
    <section>
      {cartItems.map((item) => {
        <ShoppingCartItem />;
      })}
    </section>
  );
};

ShoppingCartItem.propTypes = {
  cartItems: PropTypes.object,
  isSubItem: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  shouldShowQuantity: PropTypes.bool,
  hasPaid: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartItemsSection;
