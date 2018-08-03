import React from 'react';
import classNames from 'classnames';

const getIconSvg = item =>
    item.iconSvg || 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><path fill-rule="evenodd" d="M7.005 3.95L4.091 1.037a1.949 1.949 0 1 0-2.758 2.758l2.915 2.914-2.915 2.915a1.949 1.949 0 1 0 2.758 2.757l2.914-2.914L8.351 8.12c.78-.78.772-2.05 0-2.822L7.005 3.951z"/></svg>;

const MenuItem = ({ item, isEmphasised }) => (
    <li role="none" className={classNames('page-menu__item', { 'page-menu__item--logged-in': isEmphasised })}>
        <a role="menuitem" tabIndex="0" className="page-menu__item-link"
            href={item.url}>
            <span className="page-menu__item-text">
                {item.text}
            </span>
            {item.notification &&
                <span className="page-menu__item-notification">{item.notification}</span>}
                <i className={classNames('page-menu__item-icon', { 'page-menu__item-icon--small' : !isEmphasised })}> 
                {getIconSvg(item)}
                </i>
        </a>
    </li>
);

export default MenuItem;