import React  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../../dist/atoms/SvgIcon';

/**
 * Status: *finished*.
 * Category: Buttons
 */
const QuantityButton = ({ icon, isDisabled, onClick, text }) => (
    <button
        className={classnames('button button--small quantity-picker__button', {
            'button--disabled': isDisabled
        })}
        disabled={isDisabled}
        onClick={onClick}>
        <SvgIcon className="quantity-picker__button__icon" iconName={icon} title={text} />
    </button>
);

const QuantityPicker = ({ onChangeQuantity, quantity, minQuantity, maxQuantity }) => {
    if (!minQuantity) {
        minQuantity = Number.MIN_SAFE_INTEGER;
    }
    if (!maxQuantity) {
        maxQuantity = Number.MAX_SAFE_INTEGER;
    }

    return (
        <div className="quantity-picker">
            <QuantityButton
                icon="ico_minus"
                isDisabled={quantity <= minQuantity}
                onClick={() => onChangeQuantity(Math.max(quantity - 1, minQuantity))}
                text="Øk antall"
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
                text="Reduser antall"
            />
        </div>
    );
};

QuantityPicker.propTypes = {
    onChangeQuantity: PropTypes.func,
    quantity: PropTypes.number.isRequired,
    minQuantity: PropTypes.number,
    maxQuantity: PropTypes.number
};

QuantityButton.propTypes = {
    icon: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default QuantityPicker;