import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const Quote = ({ children, className, inline = false, source, ...rest }) => (
    <blockquote
        className={classnames('quote', {
            [className]: className,
            ['quote--inline-right']: inline,
        })}
        {...rest}>
        <p className="quote__text">{children}</p>
        <span className="quote__source">{source}</span>
    </blockquote>
);

Quote.propTypes = {
    /** Whenever should be inlined in the right side of a text. */
    inline: PropTypes.bool,
    /** Text of the quote. */
    children: PropTypes.string.isRequired,
    /** Source of the quote. */
    source: PropTypes.string.isRequired
};

export default Quote;