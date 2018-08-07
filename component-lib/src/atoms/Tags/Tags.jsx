import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const Tags = ({ children, className, color, ...rest }) => (
    <div
        className={classnames('tags', {
            [className]: className,
            [`tags--${color}`]: color,
        })}
        {...rest}>
        {children}
    </div>
);

Tags.Tag = ({ children, className }) => (
    <span className={classnames('tags__tag', {
        [className]: className
    })}>
        {children}
    </span>
);

Tags.propTypes = {
    /** Additional classes */
    className: PropTypes.string,
    /** Tags.Tag nodes to display. */
    children: PropTypes.oneOfType([
        Tags.Tag,
        PropTypes.arrayOf(Tags.Tag)
    ]),
    /** One of ['dark-grey'] */
    color: PropTypes.oneOf(['dark-grey'])
};

export default Tags;