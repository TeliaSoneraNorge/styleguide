import React from 'react';
import { ShoppingcartIcon } from '../../atoms/Icon';
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
  return (
    <button className="menu-cart__button" onClick={handleClick} aria-label="Kasse">
      <div className="menu-cart__icon-container">
        <ShoppingcartIcon />
        <span className="menu-cart__item-count">
          <span className="menu-cart__item-count-text">{numberOfItemsInCart}</span>
        </span>
      </div>
    </button>
  );
};

export default MenuCart;
