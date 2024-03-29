import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import QuantityButton from './QuantityButton';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel/TextBoxWithLabel';

/**
 * Status: *finished*.
 * Category: Buttons
 */

const QuantityPicker = ({
  onChangeQuantity,
  onBlur,
  quantity,
  minQuantity,
  maxQuantity,
  addText,
  reduceText,
  quantityLabel,
  isCompact,
}) => {
  if (isNaN(quantity)) {
    quantity = '';
  }

  return (
    <div className={cn('quantity-picker', { 'quantity-picker--compact': isCompact })}>
      <QuantityButton
        icon="minus"
        isDisabled={quantity <= minQuantity || !quantity}
        onClick={() => onChangeQuantity(Math.max(quantity - 1, minQuantity))}
        text={reduceText}
      />

      <span className="quantity-picker__container">
        <TextBoxWithLabel
          className="quantity-picker__input"
          max={maxQuantity}
          min={minQuantity}
          onChange={(event) =>
            onChangeQuantity(Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
          }
          onBlur={onBlur}
          type="number"
          value={quantity}
          labelText={quantityLabel}
          hideLabel
        />
      </span>

      <QuantityButton
        icon="plus"
        isDisabled={quantity >= maxQuantity || !quantity}
        onClick={() => onChangeQuantity(Math.min(quantity + 1, maxQuantity))}
        text={addText}
      />
    </div>
  );
};

QuantityPicker.propTypes = {
  onChangeQuantity: PropTypes.func,
  onBlur: PropTypes.func,
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
