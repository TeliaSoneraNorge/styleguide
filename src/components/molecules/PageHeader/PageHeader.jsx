import ClassNames from 'classnames';
import React from 'react';

/**
 * Status: *in progress*.
 *
 * Work remaining: menu, toolbar, responsiveness.
 *
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
 */
const PageHeader = ({ logoUrl, logoTitle, logoImageDesktopPath, logoImageMobilePath, cartItemCount, isLoggedIn, loggedInUserName }) => {
    const cartShouldBeShown = (cartItemCount > 0);
    return (
        <header className={ClassNames('page-header', { 'page-header--with-cart': cartShouldBeShown })}>
            <div className="page-header__site-name-and-logo">
                <a className="page-header__site-logo" href={logoUrl} title={logoTitle}>
                    <picture>
                        <source media="(min-width: 42em)" srcSet={logoImageDesktopPath} />
                        <img src={logoImageMobilePath} alt={logoTitle} />
                    </picture>
                </a>
            </div>
            <div className="page-header__site-nav">
                <button className="page-header__menu-button page-header__icon-with_text" aria-expanded={false} aria-controls="id-to-main-navbar" aria-pressed="false">
                    <img className="page-header__menu-button-image" src="/public/icons/ico_menu_purple.svg" alt="" role="presentation" />
                    Meny
                </button>
            </div>
            <div className="page-header__site-tools">
                {cartShouldBeShown ?
                    <a className="page-header__cart-button" href="#">
                        <img className="page-header__cart-button-image" src="/public/icons/ico_buy_purple.svg" alt="Handlekurv" />
                        <span className="page-header__cart-item-count">{cartItemCount}</span>
                    </a> : null}
                {isLoggedIn ?
                    <a className="page-header__my-account-button page-header__icon-with_text" href="#">
                        <img className="page-header__cart-button-image" src="/public/icons/ico_enduser_purple.svg" alt="" role="presentation" />
                        <span className="page-header__user-name">Hei, {loggedInUserName}</span>
                    </a> :
                    <a className="page-header__log-in-button" href="#">
                        Logg inn
                    </a>}
            </div>
        </header>
    );
}

export default PageHeader;
