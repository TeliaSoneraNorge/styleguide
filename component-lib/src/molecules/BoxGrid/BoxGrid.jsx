import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * A BoxGrid component is a flexible container for the <a href="/components/atoms#Box">Box</a>
 * component. Take a look at the examples below and resize the browser to see the flow of the boxes.
 */
const BoxGrid = ({ children, className, ...rest }) => (
    <section
        className={classnames('box-grid', {
            [className]: className
        })}
        {...rest}>
        {children}
    </section>
);

export default BoxGrid;