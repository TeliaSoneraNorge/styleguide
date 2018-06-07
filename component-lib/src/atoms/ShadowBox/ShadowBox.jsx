import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const ShadowBox = ({ children, className, ...rest }) => (
    <div
        className={classnames('shadow-box', {
            [className]: className,
        })}
        {...rest}>
        {children}
    </div>
);

export default ShadowBox;