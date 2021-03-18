import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms/Icon';

const maxQuantity = 10;
const minQuantity = 1;

const ShoppingCartItemQuantityButton = ({ icon, isDisabled, onClick, text }) => (
  <button
    className={classnames('button button--small shopping-cart-section__item__button', {
      'button--disabled': isDisabled,
    })}
    disabled={isDisabled}
    onClick={onClick}
  >
    <Icon className="shopping-cart-section__item__icon-quantity" icon={icon} title={text} />
  </button>
);

const ShoppingCartItemQuantityPicker = ({ cartItem, name, onChangeQuantity, quantity }) => (
  <div className="shopping-cart-section__quantity-picker">
    <ShoppingCartItemQuantityButton
      icon="minus"
      isDisabled={quantity <= minQuantity}
      onClick={() => onChangeQuantity(cartItem, Math.max(quantity - 1, minQuantity))}
      text={`Fjern en ${name}`}
    />
    <label className="shopping-cart-section__quantity-picker__label">
      <input
        className="textbox shopping-cart-section__quantity-picker__input"
        max={maxQuantity}
        min={minQuantity}
        onChange={(event) =>
          onChangeQuantity(cartItem, Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
        }
        type="number"
        value={quantity}
      />
    </label>
    <ShoppingCartItemQuantityButton
      icon="add"
      isDisabled={quantity >= maxQuantity}
      onClick={() => onChangeQuantity(cartItem, Math.min(quantity + 1, maxQuantity))}
      text={`Legg til en ${name}`}
    />
  </div>
);

ShoppingCartItemQuantityPicker.propTypes = {
  cartItem: PropTypes.object,
  onChangeQuantity: PropTypes.func,
};

export default ShoppingCartItemQuantityPicker;
