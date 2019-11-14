import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel/TextBoxWithLabel';

/**
 * Status: *finished*.
 * Category: Buttons
 */

const QuantityPicker = ({
  onChangeQuantity,
  quantity,
  minQuantity,
  maxQuantity,
  addText,
  reduceText,
  quantityLabel,
}) => {
  if (isNaN(quantity)) {
    quantity = '';
  }

  return (
    <div className="quantity-picker">
      <QuantityButton
        icon="ico_minus"
        isDisabled={quantity <= minQuantity || quantity === ''}
        onClick={() => onChangeQuantity(Math.max(quantity - 1, minQuantity))}
        text={reduceText}
      />
      <div className="quantity-picker__input-container">
        <TextBoxWithLabel
          max={maxQuantity}
          min={minQuantity}
          onChange={event =>
            onChangeQuantity(Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
          }
          type="number"
          value={quantity}
          labelText={quantityLabel}
          hideLabel
        />
      </div>
      <QuantityButton
        icon="ico_add"
        isDisabled={quantity >= maxQuantity || quantity === ''}
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
  quantityLabel: PropTypes.string,
};

QuantityPicker.defaultProps = {
  minQuantity: Number.MIN_SAFE_INTEGER,
  maxQuantity: Number.MAX_SAFE_INTEGER,
  addText: 'Øk antall',
  reduceText: 'Reduser antall',
  quantityLabel: 'Tast inn antall',
};

QuantityButton.propTypes = {
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default QuantityPicker;
