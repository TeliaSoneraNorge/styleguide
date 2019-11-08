import React  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../../dist/atoms/SvgIcon';
import QuantityButton from './QuantityButton';

/**
 * Status: *finished*.
 * Category: Buttons
 */

const QuantityPicker = ({ onChangeQuantity, quantity, minQuantity, maxQuantity, addText, reduceText }) => (
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
                onChange={(event) => onChangeQuantity(Math.max(Math.min(parseInt(event.target.value), maxQuantity), minQuantity))}
                type="number"
                value={quantity} />
        </label>
        <QuantityButton
            icon="ico_add"
            isDisabled={quantity >= maxQuantity}
            onClick={() => onChangeQuantity(Math.min(quantity + 1, maxQuantity))}
            text={addText}
        />
    </div>
);

QuantityPicker.propTypes = {
    onChangeQuantity: PropTypes.func,
    quantity: PropTypes.number.isRequired,
    minQuantity: PropTypes.number,
    maxQuantity: PropTypes.number,
    addText: PropTypes.string,
    reduceText: PropTypes.string
};

QuantityPicker.defaultProps = {
    minQuantity: Number.MIN_SAFE_INTEGER,
    maxQuantity: Number.MAX_SAFE_INTEGER,
    addText: 'Øk antall',
    reduceText: 'Reuser antall'
};

QuantityButton.propTypes = {
    icon: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default QuantityPicker;