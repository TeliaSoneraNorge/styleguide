import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default function MenuCart({ onClick, numberOfItemsInCart }) {
  return (
    <button className="menu-cart__button" onClick={onClick}>
      <SvgIcon className="menu-cart__icon" iconName="ico_buy" color="black" />
      <span className="menu-cart__item-count">
        <span className="menu-cart__item-count-text">{numberOfItemsInCart}</span>
      </span>
    </button>
  );
}

MenuCart.propTypes = {
  onClick: PropTypes.func,
};
