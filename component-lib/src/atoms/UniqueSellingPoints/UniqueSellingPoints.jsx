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

UniqueSellingPoints.Item = ({ children, iconSvg, className, ...rest }) => (
    <li
        className={classnames('unique-selling-points__block', {
            [className]: className
        })}
        {...rest}>
        <div className="unique-selling-points__icon">{iconSvg}</div>
        <div>{children}</div>
    </li>
);

UniqueSellingPoints.propTypes = {
    /** Zero or more of UniqueSellingPoints.Item elements. */
    children: PropTypes.node,
};

UniqueSellingPoints.Item.propTypes = {
    /** Src of an icon to display. */
    iconSvg: PropTypes.node,
};

export default UniqueSellingPoints;