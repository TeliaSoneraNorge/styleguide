import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * A BoxGrid component is a flexible container for the <a href="/components/atoms#Box">Box</a>
 * component. Take a look at the examples below and resize the browser to see the flow of the boxes.
 *
 * Flex in the boxes can be turned off with box--no-flex.
 * 
 * Content in boxes can be centered with box-grid--center-content.
 * 
 * You can override boxes to take up 45% of total width by using box--half-width.
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