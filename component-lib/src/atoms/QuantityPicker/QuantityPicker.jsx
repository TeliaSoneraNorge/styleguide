import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';

/**
 * Status: *finished*.
 * Category: Buttons
 */

const QuantityPicker = ({ onChangeQuantity, quantity, minQuantity, maxQuantity, addText, reduceText, inputName }) => {
  if (isNaN(quantity)) {
    quantity = '';
  }

  return (
    <div className="quantity-picker">
      <QuantityButton
        icon="ico_minus"
        isDisabled={quantity <= minQuantity}
        onClick={() => onChangeQuantity(Math.max(quantity - 1, minQuantity))}
        text={reduceText}
      />
      <label className="quantity-picker__label">
        <input
          className="textbox quantity-picker__input"
          max={maxQuantity}
          min={minQuantity}
          onChange={event =>
            onChangeQuantity(Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
          }
          type="number"
          name={inputName}
          value={quantity}
        />
      </label>
      <QuantityButton
        icon="ico_add"
        isDisabled={quantity >= maxQuantity}
        onClick={() => onChangeQuantity(Math.min(quantity + 1, maxQuantity))}
        text={addText}
      />
    </div>
  );
};

QuantityPicker.propTypes = {
  onChangeQuantity: PropTypes.func,
  quantity: PropTypes.number.isRequired,
  minQuantity: PropTypes.number,
  maxQuantity: PropTypes.number,
  addText: PropTypes.string,
  reduceText: PropTypes.string,
  inputName: PropTypes.string,
};

QuantityPicker.defaultProps = {
  minQuantity: Number.MIN_SAFE_INTEGER,
  maxQuantity: Number.MAX_SAFE_INTEGER,
  addText: 'Øk antall',
  reduceText: 'Reduser antall',
  inputName: 'Tast inn antall',
};

QuantityButton.propTypes = {
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default QuantityPicker;
