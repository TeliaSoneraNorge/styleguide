import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import MenuOverlay from './MenuOverlay';
import MenuTopPanel from './MenuTopPanel';
import MenuBar from './MenuBar';

const PageMenu = ({
    links,
    menuId,
    isExpanded,
    onClose,
    fixedPosition,
    showLogoutButton
}) => (
    <div>
        <div
            className={classNames(
                'page-menu',
                { 'page-menu--fixed': fixedPosition },
                { 'page-menu--expanded': isExpanded })}
            id={menuId || "page-header-menu"}>
            <MenuTopPanel isExpanded={isExpanded} menuId={menuId} onClose={onClose} />
            <nav aria-label="Main menu">
                <MenuBar
                    ariaLabel="innlogget brukermeny"
                    items={links.filter(link => link.forLoggedInUsers)} loggedIn />

                <MenuBar
                    ariaLabel="brukermeny"
                    items={links.filter(link => !link.forLoggedInUsers)} />

                {showLogoutButton &&
                    <ul className="page-menu__item-list">
                        <li className="page-menu__item">
                            <div className="page-menu__item-link">
                                <a className="page-menu__log-out-button link" href="#">Logg ut</a>
                            </div>
                        </li>
                    </ul>}
            </nav>
        </div>
        {fixedPosition && <MenuOverlay onClick={onClose} active={isExpanded} />}
    </div>
);

export default PageMenu;