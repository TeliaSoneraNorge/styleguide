import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const FactTwoColumnContent = ({
  iconName,
  title,
  centerIcon,
  imgSrc,
  imgAlt,
  children
}: any) => (
  <React.Fragment>
    <div className="fact-box__left">
      <FactContent iconName={iconName} title={title} underline={iconName && !centerIcon}>
        {children}
      </FactContent>
    </div>
    {imgSrc && (
      <div className="fact-box__right">
        <img className="fact-box__image" alt={imgAlt} src={imgSrc} />
      </div>
    )}
  </React.Fragment>
);

const FactContent = ({
  children,
  iconName,
  title,
  underline
}: any) => (
  <React.Fragment>
    {iconName && <SvgIcon className="fact-box__icon" iconName={iconName} color="black" />}
    <h3 className="fact-box__heading heading heading--level-3">{title}</h3>
    {underline && <hr className="fact-box__line" />}
    <div className="fact-box__text">{children}</div>
  </React.Fragment>
);

type FactBoxProps = {
    children: React.ReactNode;
    title: string;
    imgAlt?: string;
    imgSrc?: string;
    iconName?: string;
    centerIcon?: boolean;
};

/**
 * Status: *finished*'
 * Category: Boxes
 *
 * FactBox takes the width of its container, but we recommend to use it within a
 * <code>&lt;div class="container container--small"&gt;</code> as the example beneath shows.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'FactB... Remove this comment to see the full error message
const FactBox = ({ children, title, imgAlt, imgSrc, iconName, className, centerIcon, ...rest }: FactBoxProps) => (
  <div
    className={classnames('container container--small', {
      [className]: className,
    })}
    {...rest}
  >
    <section
      className={classnames('fact-box', {
        'fact-box--centered-icon': centerIcon,
        'fact-box--two-columns': !!imgSrc,
      })}
    >
      {imgSrc ? (
        <FactTwoColumnContent iconName={iconName} title={title} underline={!centerIcon} imgSrc={imgSrc} imgAlt={imgAlt}>
          {children}
        </FactTwoColumnContent>
      ) : (
        <FactContent iconName={iconName} title={title} underline={!centerIcon}>
          {children}
        </FactContent>
      )}
    </section>
  </div>
);

export default FactBox;
