import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default function MenuCart({ onClick, numberOfItemsInCart }) {
  return (
    <button className="menu-cart__button" onClick={onClick} aria-label="Kasse">
      <div className="menu-cart__icon-container">
        <SvgIcon className="menu-cart__icon" iconName="ico_buy" color="black" />
        <span className="menu-cart__item-count">
          <span className="menu-cart__item-count-text">{numberOfItemsInCart}</span>
        </span>
      </div>
      <span className="menu-cart__button--label">Kasse</span>
    </button>
  );
}

MenuCart.propTypes = {
  onClick: PropTypes.func,
};
