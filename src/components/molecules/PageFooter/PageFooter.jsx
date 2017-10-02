import _ from 'lodash';
import React from 'react';

/**
 * Status: *finished*.
 *
 * Future work: improved animations.
 *
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = ({ links, specialLink }) =>
    <footer className="page-footer">
        <div className="page-footer__content">
            <div className="page-footer__content-wrapper">
                <nav className="page-footer__main-nav">
                    {_.map(links, (link, i) =>
                        <a key={i} className="page-footer__link" href={link.url}>{link.text}</a>
                    )}
                </nav>
                <nav className="page-footer__special-nav">
                    <a className="page-footer__special-link page-footer__link" href={specialLink.url}>{specialLink.text}</a>
                </nav>
                {_.map([0, 1, 2, 3, 4], (i) =>
                    <div key={i} className={`page-footer__pebble page-footer__pebble--${i}`}></div>
                )}
            </div>
        </div>
    </footer>;

export default PageFooter;
