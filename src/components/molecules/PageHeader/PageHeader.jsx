import React from 'react';

/**
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
 */
const PageHeader = ({ text, onClick }) =>
    <header className="page-header">
        <div className="page-header__site-name-and-logo">
            <span className="page-header__site-name">Telia</span>
            <img className="page-header__site-logo" src="/public/images/telia-logo-animated-transparent.gif" alt="Telia" />
        </div>
        <div className="page-header__site-nav">
            <img className="page-header__site-nav-burger" src="/public/images/header-burger.png" alt="Telia" />
        </div>
        <div className="page-header__site-tools">
            <div className="page-header__site-tool"></div>
            <div className="page-header__site-tool"></div>
        </div>
    </header>;

export default PageHeader;
