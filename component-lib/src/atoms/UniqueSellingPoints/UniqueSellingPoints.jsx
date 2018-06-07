import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const UniqueSellingPoints = ({ children, className, ...rest }) => (
    <ul
        className={classnames('unique-selling-points', {
            [className]: className
        })}
        {...rest}>
        {children}
    </ul>
);

UniqueSellingPoints.Item = ({ children, imgSrc, className, ...rest }) => (
    <li
        className={classnames('unique-selling-points__block', {
            [className]: className
        })}
        {...rest}>
        <img className="unique-selling-points__icon" src={imgSrc} role="presentation" />
        <div>{children}</div>
    </li>
);

UniqueSellingPoints.propTypes = {
    /** Zero or more of UniqueSellingPoints.Item elements. */
    children: PropTypes.node,
};

UniqueSellingPoints.Item.propTypes = {
    /** Src of an icon to display. */
    imgSrc: PropTypes.string,
};

export default UniqueSellingPoints;