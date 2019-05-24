import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 * Category: Buttons
 */
const Button = ({ text, kind, size, onClick, className, processingText, isProcessing, isDisabled, type = 'button', margin, ...rest }) =>
    <button
        className={classnames('button', {
            [`button--${kind}`]: !isDisabled && kind,
            [`button--${size}`]: size,
            [`button--margin-${margin}`]: margin,
            'button--processing': isProcessing,
            'button--disabled': isDisabled,
            [className]: className,
        })}
        onClick={onClick}
        disabled={isProcessing || isDisabled}
        type={type}
        {...rest}>
        {!isProcessing && text}
        {isProcessing && (
            <span className="button__processing">
                {processingText}
                <span className="button__processing-dot">.</span>
                <span className="button__processing-dot">.</span>
                <span className="button__processing-dot">.</span>
            </span>
        )}
    </button>;

Button.types = {
    button: 'button',
    reset: 'reset',
    submit: 'submit',
};

Button.kinds = {
    primary: 'primary',
    cancel: 'cancel',
    link: 'link',
    inverted: 'inverted',
    negative: 'negative',
};

Button.margins = {
    top: 'top',
    bottom: 'bottom',
};

Button.propTypes = {
    /** A button can have a text. */
    text: PropTypes.string,
    type: PropTypes.oneOf(Object.values(Button.types)),
    /** A button can have different appearances e.g. 'primary', 'cancel'. */
    kind: PropTypes.oneOf(Object.values(Button.kinds)),
    /** One of ['top', 'bottom'] */
    margin: PropTypes.oneOf(Object.values(Button.margins)),
    /** A button can have different sizes e.g. 'small'. */
    size: PropTypes.oneOf(['small']),
    onClick: PropTypes.func,
    /** Additional classes. */
    className: PropTypes.string,
    /** A button can change text while it is processing. */
    processingText: PropTypes.string,
    /** A button can be in processing state */
    isProcessing: PropTypes.bool,
    /** A button can be disabled.  */
    isDisabled: PropTypes.bool,
};

export default Button;
