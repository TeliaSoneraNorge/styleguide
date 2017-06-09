import React from 'react';

/**
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = () =>
    <footer className="page-footer">
        <div className="page-footer__content">
            <div className="page-footer__content-wrapper content-wrapper">
                <nav className="page-footer__main-nav">
                    <a className="page-footer__link" href="#">Om Telia</a>
                    <a className="page-footer__link" href="#">Telia butikker</a>
                    <a className="page-footer__link" href="#">Presse</a>
                    <a className="page-footer__link" href="#">Jobb i Telia</a>
                </nav>
                <nav className="page-footer__special-nav">
                    <a className="page-footer__link" href="#">Personvern og Cookies</a>
                </nav>

                <div className="page-footer__pebble page-footer__pebble--0"></div>
                <div className="page-footer__pebble page-footer__pebble--1"></div>
                <div className="page-footer__pebble page-footer__pebble--2"></div>
                <div className="page-footer__pebble page-footer__pebble--3"></div>
                <div className="page-footer__pebble page-footer__pebble--4"></div>
            </div>
        </div>
    </footer>;

export default PageFooter;
