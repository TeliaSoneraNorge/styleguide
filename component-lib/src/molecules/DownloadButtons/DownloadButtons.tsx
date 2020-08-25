import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

type DownloadButtonsProps = {
    children?: React.ReactNode;
};

/**
 * Status: *finished*
 * Category: Buttons
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Downl... Remove this comment to see the full error message
const DownloadButtons = ({ children, className, ...rest }: DownloadButtonsProps) => (
  <div
    className={classnames('download-buttons', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </div>
);

const Button = ({
  className,
  href,
  src,
  alt,
  title,
  ...rest
}: any) => (
  <a
    href={href}
    className={classnames('download-buttons__button', {
      className,
    })}
    {...rest}
  >
    <img className="download-buttons__image" src={src} alt={alt} title={title} aria-label={rest['aria-label']} />
  </a>
);
DownloadButtons.Button = Button;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '({ cl... Remove this comment to see the full error message
DownloadButtons.Button.propTypes = {
  /** Use if you want to redirect to a url after click. */
  href: PropTypes.string,
  /** On click handler. */
  onClick: PropTypes.func,
  /** Button image source. */
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  'aria-label': PropTypes.string,
};

export default DownloadButtons;
