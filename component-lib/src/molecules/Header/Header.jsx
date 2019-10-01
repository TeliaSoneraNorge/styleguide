import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading/Heading';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 * Category: PageHeaders
 */
const Header = ({
    videoSrc,
    videoTitle,
    iconName,
    hideIconOnDesktop,
    runningTitle,
    pageTitle,
    withMask,
    withContentOverlap,
    withBorderBottom,
    backgroundColor,
    children
}) =>
    <header className={
        classNames('header', {
            'header--hide-icon-on-desktop': hideIconOnDesktop,
            'header--with-mask': withMask,
            'header--with-content-overlap': withContentOverlap,
            'header--with-border-bottom': withBorderBottom,
            [`header--${backgroundColor}`]: !!backgroundColor
        })}>
        {videoSrc ?
            <div className="video container container--large container--no-padding container--no-margin">
                <div className="video__iframe-wrapper">
                    <iframe
                        src={videoSrc}
                        className="video__iframe"
                        frameBorder="0"
                        allowFullScreen
                        title={videoTitle}></iframe>
                </div>
            </div> : null
        }
        <div className="header__container container container--medium container--no-padding container--no-margin">
            {iconName &&
                <SvgIcon className="header__icon" iconName={iconName} role="presentation" />}
            {runningTitle &&
                <span className="header__subtitle ">{runningTitle}</span>}
            <Heading level={1} text={pageTitle} />
            <section className="header__preamble">{children}</section>
        </div>
    </header>;

Header.propTypes = {
    videoSrc: PropTypes.string,
    videoTitle: PropTypes.string,
    iconName: PropTypes.string,
    hideIconOnDesktop: PropTypes.bool,
    runningTitle: PropTypes.string,
    pageTitle: PropTypes.string.isRequired,
    withMask: PropTypes.bool,
    withContentOverlap: PropTypes.bool,
    withBorderBottom: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(['white']),
    children: PropTypes.node,
};

export default Header;