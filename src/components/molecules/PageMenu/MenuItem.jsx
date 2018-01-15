import React from 'react';
import classNames from 'classnames';

const MenuItem = ({ item, loggedIn }) => (
    <li role="none" className={classNames('page-menu__item', { 'page-menu__item--logged-in': loggedIn })}>
        <a role="menuitem" tabindex="-1" className="page-menu__item-link"
            href={item.url}>
            <span className="page-menu__item-text">
                {item.text}
            </span>
            {item.notification &&
                <span className="page-menu__item-notification">{item.notification}</span>}
            <i
                className="page-menu__item-icon"
                style={{ backgroundImage: item.icon ?`url('${item.icon}')` : null }} />
        </a>
    </li>
);

export default MenuItem;