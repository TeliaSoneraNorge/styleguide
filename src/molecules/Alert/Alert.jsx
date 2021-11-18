import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';

import { Icon } from '../../atoms/Icon/Icon';
import { colors } from '../../utils/colors';

/**
 * Status: *finished*.
 * Category: Notifications
 */
const Alert = ({
  kind = 'positive',
  minimizable,
  size,
  bodyHtml,
  closeButtonText = 'LUKK',
  links = [],
  children,
  onOpen,
  onClose,
  isOpen,
  scrollTo = false,
  minimizedText,
  className,
  hideIcon,
  ...rest
}) => {
  const alertRef = useRef();
  const positiveAlert = kind === 'positive';

  useEffect(() => {
    if (scrollTo) {
      alertRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  return (
    <div
      ref={alertRef}
      className={classnames('alert', {
        [className]: className,
        [`alert--${kind}`]: kind,
        [`alert--${size}`]: size,
        [`alert--minimizable`]: minimizable,
        [`alert--minimized`]: minimizable && !isOpen,
      })}
      role="alert"
      {...rest}
    >
      <div className="alert__content">
        {!hideIcon && (
          <div className="alert__icon-container">
            <Icon
              icon={positiveAlert ? 'check-mark-circle' : 'info'}
              style={{
                color: positiveAlert ? colors.green700 : colors.black,
                width: '2.5rem',
                height: '2.5rem',
                marginRight: '1rem',
              }}
            />
          </div>
        )}
        <div className="alert__text-container">
          {children ? children : bodyHtml}
          {links.length > 0 ? (
            <ul className="list list--links list--black">
              {map(links, (link, i) => (
                <li key={i} className="list__item">
                  <a className="list__link" href={link.url} target="_self">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      {minimizable && (
        <button onClick={onClose} className="alert__close">
          <span className="alert__close-text">{closeButtonText}</span>
          <Icon
            icon="close"
            className="box__close-icon"
            style={{
              width: '1.7rem',
              height: '1.7rem',
              position: 'relative',
              top: '-0.3rem',
            }}
          />
        </button>
      )}
      <button onClick={onOpen} className="alert__expand">
        {minimizedText}
      </button>
    </div>
  );
};

Alert.propTypes = {
  closeButtonText: PropTypes.string,
  kind: PropTypes.oneOf(['positive', 'negative', 'info', 'warning']),
  size: PropTypes.oneOf(['large', 'large-with-borders']),
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  scrollTo: PropTypes.bool,
  minimizedText: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  hideIcon: PropTypes.bool,
};

export default Alert;
