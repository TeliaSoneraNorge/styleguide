import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { ICartItem, ICartItemPrice } from './types';
import { Icon } from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Link';

export interface ShoppingCartItemProps {
  onChangeQuantity: (cartItem: ICartItem, quantity: number) => void;
  shouldShowQuantity: boolean;
  onRemoveItem: (cartItem: ICartItem) => void;
  isAllowedToDelete: boolean;
  cartItem: ICartItem;
  formatPrice: (price: string | number) => string;
}

const ShoppingCartItem = ({
  onChangeQuantity,
  shouldShowQuantity,
  onRemoveItem,
  isAllowedToDelete,
  cartItem,
}: ShoppingCartItemProps) => {
  const {
    id,
    leaseMonths,
    name,
    lineThrough,
    subtitle,
    price,
    discount,
    type,
    image,
    color,
    modelSize,
    items,
    href,
  } = cartItem;
  const quantity = _.get(cartItem, 'quantity.value', 1);
  const isQuantityModifiable = _.get(cartItem, 'quantity.modifiable');
  const isRemovable = _.get(cartItem, 'quantity.removable');
  const shouldShowPricePerUnit = (!!price.upfront || !!price.firstInvoice) && quantity > 1;
  const discountValueUpfront = _.get(discount, 'value.upfront') || 0;
  const isLease = leaseMonths === 0 || !!leaseMonths;
  const hasSubscription = !!_.find(items, (item) => item.type.includes('SUBSCRIPTION'));
  const discountValueMonthly = _.get(discount, 'value.monthly') || 0;
  const isActive = _.get(cartItem, 'status.isActive');
  let discountPrice: number;

  const formatPrice = (price: string | number) => {
    if (typeof price === 'number') {
      return price % 1 === 0 ? price + ',-' : price + ' kr';
    }
    return price;
  };

  const getPrice = (
    formatPrice: (price: string | number) => string,
    price: ICartItemPrice,
    discountValueUpfront: number,
    discountValueMonthly: number,
    quantity: number
  ) => {
    if (_.isEmpty(price)) {
      return null;
    }

    if (_.isNumber(price.monthly)) {
      discountPrice = price.monthly;
      return formatPrice(price.monthly - discountValueMonthly || 0);
    }

    if (_.isNumber(price.firstInvoice)) {
      return formatPrice(price.firstInvoice * quantity);
    }

    if (_.isNumber(price.upfront)) {
      discountPrice = price.upfront * quantity;
      return formatPrice((price.upfront - discountValueUpfront || 0) * quantity);
    }
    return null;
  };

  const CartItemImage = () => {
    if (!image) {
      return <div className="telia-shopping-cart__item__no-image__container"></div>;
    }
    return (
      <div className="telia-shopping-cart__item__image__container">
        {(image.url && <img className="telia-shopping-cart__item__image" src={`${image.url}?w=44&h=75`} alt="" />) ||
          (image.icon && <Icon className={'telia-shopping-cart__item__image'} icon={image.icon} title="" />)}
      </div>
    );
  };

  const QuantityPicker = () => {
    const minQuantity = 1;
    const maxQuantity = 10;
    return (
      <div className="telia-shopping-cart__item__quantity-picker-wrapper">
        <div className="telia-shopping-cart__item__quantity-picker">
          <button
            className={cn('telia-shopping-cart__item__quantity-picker__button', {
              'telia-shopping-cart__item__quantity-picker__button--disabled': quantity <= minQuantity,
            })}
            disabled={quantity <= minQuantity}
            onClick={() => onChangeQuantity(cartItem, quantity - 1)}
          >
            -
          </button>
          <Paragraph>{quantity}</Paragraph>
          <button
            className={cn('telia-shopping-cart__item__quantity-picker__button', {
              'telia-shopping-cart__item__quantity-picker__button--disabled': quantity >= maxQuantity,
            })}
            disabled={quantity >= maxQuantity}
            onClick={() => onChangeQuantity(cartItem, quantity + 1)}
          >
            +
          </button>
        </div>
        {shouldShowPricePerUnit && (
          <span className="telia-shopping-cart__item__price-per">
            {quantity > 1 && !isQuantityModifiable && `${quantity} x `}
            {`${getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, 1)}/stk`}
          </span>
        )}
      </div>
    );
  };

  const CartItemName = () => (
    <div className="telia-shopping-cart__item__name">
      <div className="telia-shopping-cart__item__link">{href ? <Link href={href}>{name}</Link> : name}</div>
      {color && (
        <Paragraph>
          {color}
          {modelSize ? ', ' + modelSize : ''}
        </Paragraph>
      )}
      <CartItemPrice />
    </div>
  );

  const CartItemPrice = () => (
    <div className="telia-shopping-cart__item__price">
      <div className="telia-shopping-cart__item__price__container">
        <div className="telia-shopping-cart__item__subtitle">
          {subtitle ? <div className="paragraph" dangerouslySetInnerHTML={{ __html: subtitle }} /> : <span></span>}
          {isQuantityModifiable && <QuantityPicker />}
        </div>
        <span className="telia-shopping-cart__item__price__cost">
          <span className="telia-shopping-cart__item__price__label">
            {isLease && !hasSubscription && 'fra '}{' '}
            {getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, quantity)}
            {price.monthly ? ' /md.' : ''}
          </span>
          {formatPrice(discountPrice) !==
            getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, quantity) && (
            <span className="telia-shopping-cart__item__price__linethrough">
              {price.monthly ? formatPrice(discountPrice) + ' /md.' : formatPrice(discountPrice)}
            </span>
          )}
        </span>
      </div>
    </div>
  );

  return (
    <div className="telia-shopping-cart__item">
      <div className="telia-shopping-cart__item__name__container">
        <CartItemImage />
        <CartItemName />
      </div>
      {isRemovable && isAllowedToDelete && (
        <button onClick={() => onRemoveItem(cartItem)} className="telia-shopping-cart__item__delete-button__container">
          <Icon icon="trash" />
        </button>
      )}
    </div>
  );
};

export default ShoppingCartItem;
