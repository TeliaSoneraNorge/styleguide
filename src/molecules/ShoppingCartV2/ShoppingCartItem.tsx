import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { ICartItem, ICartItemPrice } from './types';
import { Icon } from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Link';
import { CART_ITEM_TYPE } from './index';

const formatPrice = (price: string | number) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

const getDiscountPrice = (price: ICartItemPrice, quantity: number) => {
  if (_.isEmpty(price)) {
    return null;
  }

  if (_.isNumber(price.monthly)) {
    return price.monthly;
  }

  if (_.isNumber(price.upfront)) {
    return price.upfront * quantity;
  }
  return null;
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
    return formatPrice(price.monthly - discountValueMonthly || 0);
  }

  if (_.isNumber(price.firstInvoice)) {
    return formatPrice(price.firstInvoice * quantity);
  }

  if (_.isNumber(price.upfront)) {
    return formatPrice((price.upfront - discountValueUpfront || 0) * quantity);
  }
  return null;
};
export interface ShoppingCartItemProps {
  shouldShowQuantity: boolean;
  isAllowedToDelete: boolean;
  cartItem: ICartItem;
  hasPaid?: boolean;
  onChangeQuantity: (cartItem: ICartItem, quantity: number) => void;
  onRemoveItem: (cartItem: ICartItem) => void;
  formatPrice: (price: string | number) => string;
}

interface QuantityPickerProps {
  quantity: number;
  cartItem: ICartItem;
  shouldShowPricePerUnit: boolean;
  isQuantityModifiable: boolean;
  price: ICartItemPrice;
  discountValueUpfront: number;
  discountValueMonthly: number;
  hasPaid?: boolean;
  onChangeQuantity: (cartItem: ICartItem, quantity: number) => void;
  getPrice: (
    formatPrice: (price: string | number) => string,
    price: ICartItemPrice,
    discountValueUpfront: number,
    discountValueMonthly: number,
    quantity: number
  ) => string | null;
}

const QuantityPicker = ({
  quantity,
  onChangeQuantity,
  cartItem,
  shouldShowPricePerUnit,
  isQuantityModifiable,
  price,
  discountValueUpfront,
  discountValueMonthly,
  hasPaid,
  getPrice,
}: QuantityPickerProps) => {
  const minQuantity = 1;
  const maxQuantity = 10;
  return (
    <div className="telia-shopping-cart__item__quantity-picker-wrapper">
      {!hasPaid && (
        <div className="telia-shopping-cart__item__quantity-picker">
          <button
            type="button"
            className={cn('telia-shopping-cart__item__quantity-picker__button', {
              'telia-shopping-cart__item__quantity-picker__button--disabled': quantity <= minQuantity,
            })}
            disabled={quantity <= minQuantity}
            onClick={() => onChangeQuantity(cartItem, quantity - 1)}
          >
            <Icon icon="minus" />
          </button>
          <Paragraph>{quantity}</Paragraph>
          <button
            type="button"
            className={cn('telia-shopping-cart__item__quantity-picker__button', {
              'telia-shopping-cart__item__quantity-picker__button--disabled': quantity >= maxQuantity,
            })}
            disabled={quantity >= maxQuantity}
            onClick={() => onChangeQuantity(cartItem, quantity + 1)}
          >
            <Icon icon="plus" />
          </button>
        </div>
      )}
      {shouldShowPricePerUnit && (
        <span className="telia-shopping-cart__item__price-per">
          {quantity > 1 && !isQuantityModifiable && `${quantity} x `}
          {`${getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, 1)}/stk`}
        </span>
      )}
    </div>
  );
};

interface CartImageProps {
  cartItem: ICartItem;
}

const CartItemImage = ({ cartItem }: CartImageProps) => {
  if (!cartItem.image) {
    return <div className="telia-shopping-cart__item__no-image__container"></div>;
  }
  return (
    <div className="telia-shopping-cart__item__image__container">
      {(cartItem.href && (
        <Link href={cartItem.href}>
          {(cartItem.image.url && (
            <img className="telia-shopping-cart__item__image" src={`${cartItem.image.url}?w=44&h=75`} alt="" />
          )) ||
            (cartItem.image.icon && (
              <Icon className={'telia-shopping-cart__item__image'} icon={cartItem.image.icon} title="" />
            ))}
        </Link>
      )) ||
        (cartItem.image.url && (
          <img className="telia-shopping-cart__item__image" src={`${cartItem.image.url}?w=44&h=75`} alt="" />
        )) ||
        (cartItem.image.icon && (
          <Icon className={'telia-shopping-cart__item__image'} icon={cartItem.image.icon} title="" />
        ))}
    </div>
  );
};

interface CartItemPriceProps {
  cartItem: ICartItem;
  hasPaid?: boolean;
  onChangeQuantity: (cartItem: ICartItem, quantity: number) => void;
}

const CartItemPrice = ({ cartItem, hasPaid, onChangeQuantity }: CartItemPriceProps) => {
  const quantity = _.get(cartItem, 'quantity.value', 1);
  const isQuantityModifiable = _.get(cartItem, 'quantity.modifiable');
  const shouldShowPricePerUnit = (!!cartItem.price.upfront || !!cartItem.price.firstInvoice) && quantity > 1;
  const discountValueUpfront = _.get(cartItem.discount, 'value.upfront') || 0;
  const isLease = cartItem.leaseMonths === 0 || !!cartItem.leaseMonths;
  const hasSubscription = !!_.find(cartItem.items, (item) => item.type.includes('SUBSCRIPTION'));
  const discountValueMonthly = _.get(cartItem.discount, 'value.monthly') || 0;
  const discountPrice = getDiscountPrice(cartItem.price, quantity) || '';
  const price = getPrice(formatPrice, cartItem.price, discountValueUpfront, discountValueMonthly, quantity);

  return (
    <div className="telia-shopping-cart__item__price">
      <div className="telia-shopping-cart__item__price__container">
        <div className="telia-shopping-cart__item__subtitle">
          {cartItem.subtitle ? (
            <div
              data-hj-suppress={cartItem.type === CART_ITEM_TYPE.SUBSCRIPTION ? true : undefined}
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: cartItem.subtitle }}
            />
          ) : (
            <span></span>
          )}
          {quantity > 1 && !shouldShowPricePerUnit && (
            <span className="shopping-cart__item__price-per">{`${quantity} stk`}</span>
          )}
          {isQuantityModifiable && (
            <QuantityPicker
              quantity={quantity}
              onChangeQuantity={onChangeQuantity}
              cartItem={cartItem}
              shouldShowPricePerUnit={shouldShowPricePerUnit}
              isQuantityModifiable={isQuantityModifiable}
              price={cartItem.price}
              discountValueUpfront={discountValueUpfront}
              discountValueMonthly={discountValueMonthly}
              hasPaid={hasPaid}
              getPrice={getPrice}
            />
          )}
        </div>
        <span className="telia-shopping-cart__item__price__cost">
          <span className="telia-shopping-cart__item__price__label">
            {isLease && !hasSubscription && 'fra '}
            {price}
            {cartItem.price.monthly ? '/md.' : ''}
          </span>
          {formatPrice(discountPrice) !== price && (
            <span className="telia-shopping-cart__item__price__linethrough">
              {cartItem.price.monthly ? formatPrice(discountPrice) + '/md.' : formatPrice(discountPrice)}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
interface CartItemNameProps {
  cartItem: ICartItem;
}

const CartItemName = ({ cartItem }: CartItemNameProps) => (
  <>
    <div className="telia-shopping-cart__item__link">
      {cartItem.lineThrough && (
        <span className="telia-shopping-cart__item__price__linethrough">{cartItem.lineThrough}</span>
      )}
      {cartItem.href ? <Link href={cartItem.href}>{cartItem.name}</Link> : cartItem.name}
    </div>
    {cartItem.color && (
      <Paragraph>
        {cartItem.color}
        {cartItem.modelSize ? ', ' + cartItem.modelSize : ''}
      </Paragraph>
    )}
  </>
);

const ShoppingCartItem = ({
  onChangeQuantity,
  onRemoveItem,
  isAllowedToDelete,
  cartItem,
  hasPaid,
}: ShoppingCartItemProps) => {
  const isRemovable = _.get(cartItem, 'quantity.removable');

  return (
    <div className="telia-shopping-cart__item">
      <div className="telia-shopping-cart__item__name__container">
        <CartItemImage cartItem={cartItem} />
        <div className="telia-shopping-cart__item__name">
          <CartItemName cartItem={cartItem} />
          <CartItemPrice cartItem={cartItem} onChangeQuantity={onChangeQuantity} hasPaid={hasPaid} />
        </div>
      </div>
      {isRemovable && isAllowedToDelete && (
        <button
          type="button"
          onClick={() => onRemoveItem(cartItem)}
          className="telia-shopping-cart__item__delete-button__container"
        >
          <Icon icon="delete" />
        </button>
      )}
    </div>
  );
};

export default ShoppingCartItem;
