import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    closeButtonText?: string;
    kind?: 'positive' | 'negative' | 'info' | 'warning';
    size?: 'large' | 'large-with-borders';
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    isOpen?: boolean;
    scrollTo?: boolean;
    minimizedText?: string;
    links?: {
        text?: string;
        url?: string;
    }[];
    hideIcon?: boolean;
};

/**
 * Status: *finished*.
 * Category: Notifications
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'minimizable' does not exist on type 'Pro... Remove this comment to see the full error message
const Alert = ({ kind = 'positive', minimizable, size, bodyHtml, closeButtonText = 'LUKK', links = [], children, onOpen, onClose, isOpen, scrollTo = false, minimizedText, className, hideIcon, ...rest }: Props) => {
  const alertRef = useRef();

  useEffect(() => {
    if (scrollTo) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      alertRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  return (
    <div
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLDi... Remove this comment to see the full error message
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
        {!hideIcon &&
          <div className="alert__icon-container">
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message */}
            <SvgIcon iconName="ico_info" color="black" className="alert__icon" role="presentation" alt="" />
          </div>
        }
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
          <SvgIcon iconName="ico_delete" color="black" className="box__close-icon" />
        </button>
      )}
      <button onClick={onOpen} className="alert__expand">
        {minimizedText}
      </button>
    </div>
  );
};

export default Alert;
