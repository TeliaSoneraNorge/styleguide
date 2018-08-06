import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Alert = ({
    kind = 'positive',
    minimizable,
    size,
    bodyHtml,
    links = [],
    children,
    onOpen,
    onClose,
    isOpen,
    minimizedText,
    className,
    ...rest }) =>
    <div
        className={classnames('alert', {
            [className]: className,
            [`alert--${kind}`]: kind,
            [`alert--${size}`]: size,
            [`alert--minimizable`]: minimizable,
            [`alert--minimized`]: minimizable && !isOpen,
        })}
        role="alert"
        {...rest}>
        <div className="alert__content">
            <div className="alert__icon-container">
                <img
                    className="alert__icon"
                    src="/public/icons/ico_info.svg"
                    role="presentation"
                    alt="" />
            </div>
            <div className="alert__text-container">
                {children
                    ? children
                    : bodyHtml
                }
                {links.length > 0 ?
                    <ul className="list list--links list--black">
                        {_.map(links, (link, i) =>
                            <li key={i} className="list__item">
                                <a className="list__link" href={link.url} target="_self">{link.text}</a>
                            </li>
                        )}
                    </ul> : null}
            </div>
        </div>
        {minimizable &&
            <button onClick={onClose} className="alert__close">
                <span className="alert__close-text">LUKK</span>
                <i className="box__close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                        <path fill-rule="evenodd" d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z"/>
                    </svg>
                </i>
            </button>
        }
        <button onClick={onOpen} className="alert__expand">{minimizedText}</button>
    </div>;

Alert.propTypes = {
    kind: PropTypes.oneOf(['positive', 'negative', 'info', 'warning']),
    size: PropTypes.oneOf(['large']),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    minimizedText: PropTypes.string,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            url: PropTypes.string
        })
    ),
};

export default Alert;
