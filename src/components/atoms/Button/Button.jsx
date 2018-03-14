import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Button = ({ text, kind, size, onClick, className, processingText, isProcessing }) =>
    <button className={classnames('button', {
        [className]: className,
        [`button--${kind}`]: kind,
        [`button--${size}`]: size,
        'button--processing': isProcessing
    })} onClick={onClick} disabled={isProcessing}>
        {!isProcessing && text}
        {isProcessing && <span className="button__processing">
            {processingText}
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
        </span>}
    </button>;

export default Button;
