import React from 'react';
import classNames from 'classnames';

const MenuOverlay = ({ onClick, active }) => (
    <div
        className={
            classNames('page-menu__overlay',
                { 'page-menu__overlay--active': active })}
        onClick={onClick} />
);

export default MenuOverlay;