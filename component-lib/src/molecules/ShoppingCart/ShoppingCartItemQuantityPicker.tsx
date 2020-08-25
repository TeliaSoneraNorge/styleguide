import React from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/Icon';

const maxQuantity = 10;
const minQuantity = 1;

const ShoppingCartItemQuantityButton = ({
  icon,
  isDisabled,
  onClick,
  text
}: any) => (
  <button
    className={classnames('button button--small shopping-cart__item__button', {
      'button--disabled': isDisabled,
    })}
    disabled={isDisabled}
    onClick={onClick}
  >
    <Icon className="shopping-cart__item__icon-quantity" icon={icon} title={text} />
  </button>
);

type ShoppingCartItemQuantityPickerProps = {
    cartItem?: any;
    onChangeQuantity?: (...args: any[]) => any;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'ShoppingCa... Remove this comment to see the full error message
const ShoppingCartItemQuantityPicker = ({ cartItem, name, onChangeQuantity, quantity }: ShoppingCartItemQuantityPickerProps) => (
  <div className="shopping-cart__quantity-picker">
    <ShoppingCartItemQuantityButton
      icon="minus"
      isDisabled={quantity <= minQuantity}
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      onClick={() => onChangeQuantity(cartItem, Math.max(quantity - 1, minQuantity))}
      text={`Fjern en ${name}`}
    />
    <label className="shopping-cart__quantity-picker__label">
      <input
        className="textbox shopping-cart__quantity-picker__input"
        max={maxQuantity}
        min={minQuantity}
        onChange={event =>
          // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
          onChangeQuantity(cartItem, Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
        }
        type="number"
        value={quantity}
      />
    </label>
    <ShoppingCartItemQuantityButton
      icon="add"
      isDisabled={quantity >= maxQuantity}
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      onClick={() => onChangeQuantity(cartItem, Math.min(quantity + 1, maxQuantity))}
      text={`Legg til en ${name}`}
    />
  </div>
);

export default ShoppingCartItemQuantityPicker;
