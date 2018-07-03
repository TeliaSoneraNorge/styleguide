import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 */
const Heading = ({ level, text, children, className, ...rest }) => {
    const TagName = `h${level}`;
    return <TagName
        className={classnames('heading', {
            [className]: className,
            [`heading--level-${level}`]: level,
        })}
        {...rest}>
        {text}
        {children}
    </TagName>;
};
Heading.propTypes = {
    /** Level of this heading (1-6). */
    level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /** Content of this heading. */
    text: PropTypes.node,
    /** Content of this heading. */
    children: PropTypes.node,
};

export default Heading;
