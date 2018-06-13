import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const FocusHeader = ({ children, className, title, ...rest }) => (
    <section
        className={classnames('focus-header', {
            [className]: className
        })}
        {...rest}>
        <h3 className="focus-header__heading heading heading--level-3">{title}</h3>
        {children}
    </section>
);

FocusHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default FocusHeader;