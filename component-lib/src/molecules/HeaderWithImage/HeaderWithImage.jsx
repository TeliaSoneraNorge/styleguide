import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *finished*.
 */
const HeaderWithImage = ({ imgSrcMobile, imgSrcDesktop, blackText, whiteText, withGradient, pageTitle, children }) =>
    <header className={classNames('header header--plain header-with-image', { 'header--black-text': blackText, 'header--white-text': whiteText, 'header-with-image--with-gradient': withGradient })}>
        <picture className="hero__picture">
            <source media="(max-width: 47.99em)" srcSet={imgSrcMobile} />
            <source media="(min-width: 48em)" srcSet={imgSrcDesktop} />
            <img className="hero__image" src={imgSrcDesktop} alt="Woman taking photo with her mobile phone by a lake" />
        </picture>
        <div className="header__container container container--medium container--no-padding container--no-margin">
            <Heading level={1} text={pageTitle} />
            <section className="header__preamble">{children}</section>
        </div>
    </header>;
HeaderWithImage.propTypes = {
    imgSrcMobile: PropTypes.string,
    imgSrcDesktop: PropTypes.string,
    blackText: PropTypes.bool,
    whiteText: PropTypes.bool,
    withGradient: PropTypes.bool,
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default HeaderWithImage;