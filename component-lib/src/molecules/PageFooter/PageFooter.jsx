import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *finished*.
 *
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = ({ links, chatLinkText, chatLink, chatImgSrc }) =>
    <footer className="page-footer">
        <div className="page-footer__content">
            <div className="page-footer__content-wrapper">
                <nav className="page-footer__main-nav">
                    {_.map(links, (link, i) =>
                        <a key={i} className="page-footer__link" href={link.url}>{link.text}</a>
                    )}
                </nav>
                {chatLink && chatImgSrc && chatLinkText &&
                <a className="page-footer__chat" href={chatLink}>
                    <img className="page-footer__chat-icon" src={chatImgSrc} alt={chatLinkText}/>
                    <div className="page-footer__chat-link-text">{chatLinkText}</div>
                </a>
                }
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
    chatLink: PropTypes.string,
    chatImgSrc: PropTypes.string,
    chatLinkText: PropTypes.string
};

export default PageFooter;
