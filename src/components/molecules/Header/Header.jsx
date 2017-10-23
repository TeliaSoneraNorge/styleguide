import classNames from 'classnames';
import React from 'react';

import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *finished*.
 */
const Header = ({ videoSrc, iconUrl, runningTitle, pageTitle, withMask, withContentOverlap, children }) =>
    <header className={classNames('header', { 'header--with-mask': withMask, 'header--with-content-overlap': withContentOverlap })}>
        {videoSrc ?
            <div className="video">
                <div className="video__iframe-wrapper">
                    <iframe
                        src={videoSrc}
                        className="video__iframe"
                        frameborder="0"
                        allowfullscreen></iframe>
                </div>
            </div> : null
        }
        {iconUrl ?
            <img className="header__icon" src={iconUrl} role="presentation" /> : null
        }
        {runningTitle ?
            <span className="header__subtitle ">{runningTitle}</span> : null
        }
        <Heading level={1} text={pageTitle} />
        <section className="header__preamble">{children}</section>
    </header>;

export default Header;