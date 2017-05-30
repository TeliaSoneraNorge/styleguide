import React from 'react';

/**
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = () =>
    <header className="page-footer">
        <div className="content-wrapper">
            <a className="page-footer__link" href="#">Om Telia</a>
            <a className="page-footer__link" href="#">Telia butikker</a>
            <a className="page-footer__link" href="#">Presse</a>
            <a className="page-footer__link" href="#">Jobb i Telia</a>
        </div>
    </header>;

export default PageFooter;
