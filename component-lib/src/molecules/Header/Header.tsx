import classNames from 'classnames';
import React from 'react';

import Heading from '../../atoms/Heading/Heading';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    videoSrc?: string;
    videoTitle?: string;
    iconName?: string;
    hideIconOnDesktop?: boolean;
    runningTitle?: string;
    pageTitle: string;
    withMask?: boolean;
    withContentOverlap?: boolean;
    withBorderBottom?: boolean;
    backgroundColor?: 'white';
    children?: React.ReactNode;
};

/**
 * Status: *finished*.
 * Category: PageHeaders
 */
const Header = ({ videoSrc, videoTitle, iconName, hideIconOnDesktop, runningTitle, pageTitle, withMask, withContentOverlap, withBorderBottom, backgroundColor, children, }: Props) => (
  <header
    className={classNames('header', {
      'header--hide-icon-on-desktop': hideIconOnDesktop,
      'header--with-mask': withMask,
      'header--with-content-overlap': withContentOverlap,
      'header--with-border-bottom': withBorderBottom,
      [`header--${backgroundColor}`]: !!backgroundColor,
    })}
  >
    {videoSrc ? (
      <div className="video container container--large container--no-padding container--no-margin">
        <div className="video__iframe-wrapper">
          <iframe src={videoSrc} className="video__iframe" frameBorder="0" allowFullScreen title={videoTitle}></iframe>
        </div>
      </div>
    ) : null}
    <div className="header__container container container--medium container--no-padding container--no-margin">
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message */}
      {iconName && <SvgIcon className="header__icon" iconName={iconName} role="presentation" />}
      {runningTitle && <span className="header__subtitle ">{runningTitle}</span>}
      <Heading level={1} text={pageTitle} />
      <section className="header__preamble">{children}</section>
    </div>
  </header>
);

export default Header;
