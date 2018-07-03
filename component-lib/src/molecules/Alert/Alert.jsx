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
                <i className="box__close-icon"></i>
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
