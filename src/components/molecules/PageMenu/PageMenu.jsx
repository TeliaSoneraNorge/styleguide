import React from 'react';
import classNames from 'classnames';
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
                <a className="page-menu__log-out-button page-header__log-in-button">Logg ut</a>}
            </nav>
        </div>
        {fixedPosition && <MenuOverlay onClick={onClose} active={isExpanded} />}
    </div>
);

export default PageMenu;