import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

interface MenuCartProps {
  onClick?: (event: React.MouseEvent) => void;
  numberOfItemsInCart: number;
}

const MenuCart = ({ onClick = (_event) => undefined, numberOfItemsInCart }: MenuCartProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClick(event);
  };
  <button className="menu-cart__button" onClick={handleClick} aria-label="Kasse">
    <div className="menu-cart__icon-container">
      <SvgIcon className="menu-cart__icon" iconName="ico_buy" color="black" />
      <span className="menu-cart__item-count">
        <span className="menu-cart__item-count-text">{numberOfItemsInCart}</span>
      </span>
    </div>
    <span className="menu-cart__button--label">Kasse</span>
  </button>;
};

export default MenuCart;
