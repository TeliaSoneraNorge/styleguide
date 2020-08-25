import classNames from 'classnames';
import React from 'react';

import Heading from '../../atoms/Heading/Heading';

type Props = {
    imgSrcMobile?: string;
    imgSrcDesktop?: string;
    blackText?: boolean;
    whiteText?: boolean;
    withGradient?: boolean;
    pageTitle: string;
    children?: React.ReactNode;
};

/**
 * Status: *finished*.
 * Category: PageHeaders
 */
const HeaderWithImage = ({ imgSrcMobile, imgSrcDesktop, blackText, whiteText, withGradient, pageTitle, children }: Props) => (
  <header
    className={classNames('header header--plain header-with-image', {
      'header--black-text': blackText,
      'header--white-text': whiteText,
      'header-with-image--with-gradient': withGradient,
    })}
  >
    <picture className="hero__picture">
      <source media="(max-width: 47.99em)" srcSet={imgSrcMobile} />
      <source media="(min-width: 48em)" srcSet={imgSrcDesktop} />
      <img className="hero__image" src={imgSrcDesktop} alt="Woman taking photo with her mobile phone by a lake" />
    </picture>
    <div className="header__container container container--medium container--no-padding container--no-margin">
      <Heading level={1} text={pageTitle} />
      <section className="header__preamble">{children}</section>
    </div>
  </header>
);

export default HeaderWithImage;
