import React from 'react';

/**
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
 */
const PageHeader = ({ logoUrl, logoTitle, logoImagePath, menuImagePath }) =>
    <header className="page-header">
        <div className="page-header__site-name-and-logo">
            <a className="page-header__site-logo" href={logoUrl} title={logoTitle}>
                <img src={logoImagePath} alt="Telia logo" />
            </a>
        </div>
        <div className="page-header__site-nav">
            <img className="page-header__site-nav-burger" src={menuImagePath} alt="Telia" />
        </div>
        <div className="page-header__site-tools">
            <div className="page-header__site-tool"></div>
        </div>
        <div className="page-header__wip-message">
            The header component is work-in-progress, i.e. the menu button doesn't work yet, etc.
        </div>
    </header>;

export default PageHeader;
