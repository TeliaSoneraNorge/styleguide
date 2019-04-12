import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 * Category: Links
 */
const TelephoneNumberLink = ({ children, className, ...rest }) => (
    <a
        href={`tel:${children.replace(/\s/g, '')}`}
        className={classnames('heading heading--level-2 telephone-number-link', {
            [className]: className
        })}
        {...rest}>
        {children}
    </a>
);

TelephoneNumberLink.propTypes = {
    /** Formatted telephone number e.g. '+47 924 05 050' */
    children: PropTypes.string.isRequired,
};

export default TelephoneNumberLink;