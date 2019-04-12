import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 * Category: ImageAndVideo
 */
const Caption = ({ className, children, ...rest }) => (
    <div
        className={classnames('caption', {
            [className]: className
        })}
        {...rest}>
        {children}
    </div>
);

export default Caption;
