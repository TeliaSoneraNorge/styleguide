import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Button = ({ text, kind, size, onClick, className, processingText, isProcessing, isDisabled }) =>
    <button className={classnames('button', {
        [className]: className,
        [`button--${kind}`]: kind,
        [`button--${size}`]: size,
        'button--processing': isProcessing,
        'button--disabled': isDisabled
    })} onClick={onClick} disabled={isProcessing || isDisabled}>
        {!isProcessing && text}
        {isProcessing && <span className="button__processing">
            {processingText}
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
        </span>}
    </button>;

export default Button;
