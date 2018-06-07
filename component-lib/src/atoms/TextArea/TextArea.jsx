import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const TextArea = ({ children, className, error, ...rest }) => (
    <textarea
        className={classnames('text-area', {
            [className]: className,
            ['text-area--with-error']: error
        })}
        {...rest}>
        {children}
    </textarea>
);

TextArea.propTypes = {
    /** Whenever should this TextArea display as error. Use when input text is not valid. */
    error: PropTypes.bool,
};

export default TextArea;