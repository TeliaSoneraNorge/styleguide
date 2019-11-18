import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

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

QuantityButton.propTypes = {
    icon: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default QuantityButton;