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
const PageHeader = ({ logoUrl, logoTitle, logoImagePath }) =>
    <header className="page-header">
        <div className="page-header__site-name-and-logo">
            <a className="page-header__site-logo" href={logoUrl} title={logoTitle}>
                <img src={logoImagePath} alt="Telia logo" />
            </a>
        </div>
        <div className="page-header__site-nav">
            <div className="page-header__placeholder">TODO</div>
        </div>
        <div className="page-header__site-tools">
            <div className="page-header__placeholder">TODO</div>
        </div>
    </header>;

export default PageHeader;
