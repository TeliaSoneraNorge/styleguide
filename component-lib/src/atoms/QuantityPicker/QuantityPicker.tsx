import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel/TextBoxWithLabel';

type OwnProps = {
    onChangeQuantity?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    quantity: number;
    minQuantity?: number;
    maxQuantity?: number;
    addText?: string;
    reduceText?: string;
    quantityLabel?: string;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof QuantityPicker.defaultProps;

/**
 * Status: *finished*.
 * Category: Buttons
 */

// @ts-expect-error ts-migrate(7022) FIXME: 'QuantityPicker' implicitly has type 'any' because... Remove this comment to see the full error message
const QuantityPicker = ({ onChangeQuantity, onBlur, quantity, minQuantity, maxQuantity, addText, reduceText, quantityLabel, }: Props) => {
  if (isNaN(quantity)) {
    quantity = '';
  }

  return (
    <div className="quantity-picker">
      <QuantityButton
        icon="minus"
        isDisabled={quantity <= minQuantity || !quantity}
        onClick={() => onChangeQuantity(Math.max(quantity - 1, minQuantity))}
        text={reduceText}
      />

      <span className="quantity-picker__container">
        <TextBoxWithLabel
          // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
          className="quantity-picker__input"
          max={maxQuantity}
          min={minQuantity}
          onChange={(event: any) => onChangeQuantity(Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))
          }
          onBlur={onBlur}
          type="number"
          value={quantity}
          labelText={quantityLabel}
          hideLabel
        />
      </span>

      <QuantityButton
        icon="add"
        isDisabled={quantity >= maxQuantity || !quantity}
        onClick={() => onChangeQuantity(Math.min(quantity + 1, maxQuantity))}
        text={addText}
      />
    </div>
  );
};

QuantityPicker.defaultProps = {
  minQuantity: Number.MIN_SAFE_INTEGER,
  maxQuantity: Number.MAX_SAFE_INTEGER,
  addText: 'Øk antall',
  reduceText: 'Reduser antall',
  quantityLabel: 'Tast inn antall',
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '({ ic... Remove this comment to see the full error message
QuantityButton.propTypes = {
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default QuantityPicker;
