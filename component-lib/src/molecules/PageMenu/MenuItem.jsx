import React from 'react';
import classNames from 'classnames';

const getIconUrl = item =>
    item.icon || require('../assets/icons/ico_linkarrow.svg');

const MenuItem = ({ item, isEmphasised }) => (
    <li role="none" className={classNames('page-menu__item', { 'page-menu__item--logged-in': isEmphasised })}>
        <a role="menuitem" tabIndex="0" className="page-menu__item-link"
            href={item.url}>
            <span className="page-menu__item-text">
                {item.text}
            </span>
            {item.notification &&
                <span className="page-menu__item-notification">{item.notification}</span>}

            <i className={classNames('page-menu__item-icon', { 'page-menu__item-icon--small' : !isEmphasised })}
                style={{ backgroundImage: `url(${getIconUrl(item)})` }} />
        </a>
    </li>
);

export default MenuItem;