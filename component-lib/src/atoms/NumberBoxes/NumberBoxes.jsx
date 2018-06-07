import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const NumberBoxes = ({ children, className, ...rest }) => (
    <ul
        className={classnames('number-boxes', {
            [className]: className
        })}
        {...rest}>
        {children}
    </ul>
);

NumberBoxes.NumberBox = ({ title, number, unit, text, className, ...rest }) => (
    <li
        className={classnames('number-box', {
            [className]: className
        })}
        {...rest}>
        <span className="number-box__title">{title}</span>
        <span className="number-box__number">{number}</span>
        <span className="number-box__unit">{unit}</span>
        <span className="number-box__text">{text}</span>
    </li>
);

NumberBoxes.propTypes = {
    /** Zero or more of NumberBoxes.NumberBox */
    children: PropTypes.node,
};

NumberBoxes.NumberBox.propTypes = {
    /** A small title. */
    title: PropTypes.string,
    /** Number to be shown. */
    number: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /** An unit of the number. */
    unit: PropTypes.string,
    /** A short descriptive text. */
    text: PropTypes.string,
};

export default NumberBoxes;