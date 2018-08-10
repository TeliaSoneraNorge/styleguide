import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';


/**
 * Status: *finished*
 */
const UniqueSellingPoints = ({ children, iconName, iconColor, className, ...rest }) => (
    <ul
        className={classnames('unique-selling-points', {
            [className]: className
        })}
        {...rest}>
        {children}
    </ul>
);

UniqueSellingPoints.Item = ({ children, iconName, iconColor, className, ...rest }) => (
    <li
        className={classnames('unique-selling-points__block', {
            [className]: className
        })}
        {...rest}>
        <SvgIcon iconName={iconName} color={iconColor} className="unique-selling-points__icon" />
        <div>{children}</div>
    </li>
);

UniqueSellingPoints.propTypes = {
    /** Zero or more of UniqueSellingPoints.Item elements. */
    children: PropTypes.node,
};

UniqueSellingPoints.Item.propTypes = {
    /** Name of icon to be displayed. */
    iconSvg: PropTypes.string,
    /** Color of icon to be displayed. */
    iconColor: PropTypes.string,
};

export default UniqueSellingPoints;