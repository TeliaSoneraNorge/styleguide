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

const SubscriptionOrServiceIcon = ({ amount, unit }) => (
  <div className="text-circle-image" aria-hidden="true">
    {amount && <span className="text-line line1">{amount}</span>}
    {unit && <span className="text-line line2">{unit}</span>}
  </div>
);

const CartItemImage = ({ image, isSubtile, isDraft }) => {
  if (!image) {
    return <div className="shopping-cart__item__no-image__container"></div>;
  }
  return (
    <div className="shopping-cart__item__image__container">
      {(image.url && <img className="shopping-cart__item__image" src={`${image.url}?w=44&h=75`} alt="" />) ||
        (image.icon && (
          <Icon
            className={cn('shopping-cart__item__image', {
              'shopping-cart__item__image--small': isSubtile,
              [`shopping-cart__item__image--${image.color || 'black'}`]: !isDraft,
              [`shopping-cart__item__image--dark-grey`]: isDraft,
            })}
            icon={image.icon}
            title=""
          />
        )) ||
        (image.amount && <SubscriptionOrServiceIcon amount={image.amount} unit={image.unit} />)}
    </div>
  );
};

const getPrice = (formatPrice, price, discountValueUpfront, discountValueMonthly, quantity) => {
  if (_.isEmpty(price)) {
    return null;
  }

  if (!isNaN(price.monthly)) {
    return formatPrice(price.monthly - discountValueMonthly || 0);
  }

  if (!isNaN(price.firstInvoice)) {
    return formatPrice(price.firstInvoice * quantity);
  }

  if (!isNaN(price.upfront)) {
    return formatPrice((price.upfront - discountValueUpfront || 0) * quantity);
  }
  return null;
};
const ShoppingCartItem = ({
  cartItem,
  isSubItem = false,
  onChangeQuantity,
  onRemoveItem,
  shouldShowQuantity,
  hasPaid,
  isSubtile,
  formatPrice,
}) => {
  const { id, leaseMonths, name, subtitle, price, discount, type, indent } = cartItem;
  const quantity = _.get(cartItem, 'quantity.value', 1);
  const isQuantityModifiable = _.get(cartItem, 'quantity.modifiable');
  const isRemovable = _.get(cartItem, 'quantity.removable');
  const shouldShowPricePerUnit = (!!price.upfront || !!price.firstInvoice) && quantity > 1;
  const discountValueUpfront = _.get(discount, 'value.upfront', 0);
  const discountValueMonthly = _.get(discount, 'value.monthly', 0);
  const isDraft = type === CART_ITEM_TYPE.SUBSCRIPTION_DRAFT;

  return (
    <ShoppingCartRow
      className={cn('shopping-cart__item', {
        'shopping-cart__item__dashed': isSubtile || isDraft,
        'shopping-cart__item__subtile': isSubtile,
      })}
      key={id}
    >
      <ShoppingCartColumnHeading
        className="shopping-cart__table__cell shopping-cart__item__name"
        colSpan={!isQuantityModifiable || hasPaid ? 2 : undefined}
        scope="row"
      >
        <div
          className={cn('shopping-cart__item__name__container', {
            'shopping-cart__item__name--subitem': isSubItem || indent,
          })}
        >
          <CartItemImage image={cartItem.image} isSubtile={isSubtile} isDraft={isDraft} />
          <div className="shopping-cart__item__name__text__container">
            {name}
            {subtitle && (
              <span
                className="shopping-cart__item__name__text__subtitle"
                data-hj-suppress={type === CART_ITEM_TYPE.SUBSCRIPTION ? true : undefined}
              >
                {subtitle}
              </span>
            )}
            {leaseMonths !== null && leaseMonths !== undefined && price.upfront && (
              <span className="shopping-cart__item__name__text__subtitle">
                Betales nå: {`${formatPrice(price.upfront - discountValueUpfront)}`}
              </span>
            )}
            {shouldShowPricePerUnit && (
              <span className="shopping-cart__item__price-per">
                {quantity > 1 && !isQuantityModifiable && `${quantity} x `}
                {`${getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, 1)}/stk`}
              </span>
            )}
            {quantity > 1 && !shouldShowPricePerUnit && (
              <span className="shopping-cart__item__price-per">{`${quantity} stk`}</span>
            )}
          </div>
        </div>
      </ShoppingCartColumnHeading>
      {shouldShowQuantity && isQuantityModifiable && !hasPaid && (
        <ShoppingCartCell className="shopping-cart__item__quantity">
          <ShoppingCartItemQuantityPicker
            cartItem={cartItem}
            name={name}
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
          />
        </ShoppingCartCell>
      )}
      <ShoppingCartCell
        className={cn('shopping-cart__item__price', {
          'shopping-cart__item__price--monthly': price.monthly,
        })}
      >
        {discountValueMonthly === 0 && discountValueUpfront === 0 ? (
          <div className="shopping-cart__item__price__container">
            <span>{getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, quantity)}</span>
            {!isNaN(price.monthly) && <span>/md.</span>}
          </div>
        ) : (
          <div className="shopping-cart__item__price__container">
            <span className="shopping-cart__item__price__number shopping-cart__item__price--discount">
              {getPrice(formatPrice, price, 0, 0, quantity)}
            </span>
            {!isNaN(price.monthly) && <span className="shopping-cart__item__price--discount">/md.</span>}
            <span className="shopping-cart__item__price__number">
              {getPrice(formatPrice, price, discountValueUpfront, discountValueMonthly, quantity)}
            </span>
            {!isNaN(price.monthly) && <span className="">/md.</span>}
          </div>
        )}
      </ShoppingCartCell>
      <ShoppingCartCell className="shopping-cart__item__delete">
        {isRemovable && !hasPaid && (
          <button className="button button--small shopping-cart__item__button" onClick={() => onRemoveItem(cartItem)}>
            <div className="shopping-cart__item__close">x</div>
            <div className="shopping-cart__item__close__text">Slett</div>
          </button>
        )}
      </ShoppingCartCell>
    </ShoppingCartRow>
  );
};

ShoppingCartItem.propTypes = {
  cartItem: PropTypes.object,
  isSubItem: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  shouldShowQuantity: PropTypes.bool,
  hasPaid: PropTypes.bool,
  isSubtile: PropTypes.bool,
  formatPrice: PropTypes.func,
};

export default ShoppingCartItem;
