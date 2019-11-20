import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 * Category: Buttons
 */
const DownloadButtons = ({ children, className, ...rest }) => (
  <div
    className={classnames('download-buttons', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </div>
);

DownloadButtons.propTypes = {
  /** One or more of DownloadButtons.Button. */
  children: PropTypes.node,
};

const Button = ({ className, href, src, alt, title, ...rest }) => (
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
