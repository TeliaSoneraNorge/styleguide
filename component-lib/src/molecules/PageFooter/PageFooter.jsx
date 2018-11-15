import React from 'react';
import PropTypes from 'prop-types';
import map  from 'lodash/map';

/**
 * Status: *finished*.
 *
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = ({ links, specialLink }) =>
    <footer className="page-footer">
        <div className="page-footer__content">
            <div className="page-footer__content-wrapper">
                <nav className="page-footer__main-nav">
                    {map(links, (link, i) =>
                        <a key={i} className="page-footer__link" href={link.url}>{link.text}</a>
                    )}
                </nav>
                <nav className="page-footer__special-nav">
                    <a className="page-footer__special-link page-footer__link" href={specialLink.url}>{specialLink.text}</a>
                </nav>
            </div>
        </div>
    </footer>;

PageFooter.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ),
    specialLink: PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
};

export default PageFooter;
