import React from 'react';
import classNames from 'classnames';

import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

type Props = {
    headingText: React.ReactNode;
    ingressHtml?: React.ReactNode;
    buttonText: React.ReactNode;
    desktopBackgroundImage: string;
    mobileBackgroundImage: string;
    backgroundImageAltText?: string;
    isUsingWhiteText?: boolean;
    isUsingWhiteContentBox?: boolean;
    children?: React.ReactNode;
};

/**
 * Status: *almost finished*.
 * Category: Hero
 *
 * This component is going to be used for campaigns, such as Music Freedom.
 *
 * Text can be altered from black to white, and the content can be placed inside a white box.
 * These options will depend on the background image.
 *
 * We are awaiting info from the UX people regarding the recommended image sizes.
 */
const Campaign = ({ headingText, ingressHtml, buttonText, desktopBackgroundImage, mobileBackgroundImage, backgroundImageAltText = '', isUsingWhiteText = false, isUsingWhiteContentBox = false, children, }: Props) => (
  <div
    className={classNames('campaign', {
      'campaign--white-text': isUsingWhiteText,
      'campaign--white-content-box': isUsingWhiteContentBox,
    })}
  >
    <picture className="campaign__picture">
      <source media="(max-width: 29.99em)" srcSet={mobileBackgroundImage} />
      <source media="(min-width: 30em)" srcSet={desktopBackgroundImage} />
      <img className="campaign__image" src={desktopBackgroundImage} alt={backgroundImageAltText} />
    </picture>
    <div className="campaign__content-wrapper">
      <div className="campaign__content">
        <Heading className="campaign__heading" level={1} text={headingText} />
        {children ? children : ingressHtml}
      </div>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'string | un... Remove this comment to see the full error message */}
      <Button className="campaign__button" text={buttonText} />
    </div>
  </div>
);

export default Campaign;
