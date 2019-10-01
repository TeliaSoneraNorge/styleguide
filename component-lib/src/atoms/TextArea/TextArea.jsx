import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *Deprecated*: Use TextAreaWithLable to be WGAC2.0 compliant. Set 'hideLabel' to hide the lable.
 * Category: FormElements
 */
const TextArea = ({ children, className, error, ...rest }) => (
    <textarea
        className={classnames('textarea', {
            [className]: className,
            ['textarea--with-error']: error
        })}
        {...rest}>
        {children}
    </textarea>
);

TextArea.propTypes = {
    /** Whenever should this TextArea display as error. Use when input text is not valid. */
    error: PropTypes.bool
};

export default TextArea;