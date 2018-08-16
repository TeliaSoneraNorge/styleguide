import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *In progress*.
 * 
 * A component that is used to create external reference to svg icons from the icon assets. 
 * To show an icon, give the name of the icon (without file ending) and the desired color (defaults to black). 
 */

const SvgIcon = ({ iconName, color, className, ...rest }) =>
    <svg 
        className={classnames('svg-icon', {
            [className]: className,
            [`svg-icon--${color || 'black'}`]: color,
        })}
        {...rest}>
        <use xlinkHref={'/public/allicons/allicons.svg#' + iconName}></use>
    </svg>;

SvgIcon.propTypes = {
    /** The name of the icon*/
    iconName: PropTypes.string,
    /** The color of the icon (white, black, purple or grey)*/
    color: PropTypes.oneOf(['white', 'black', 'purple', 'grey', 'light-grey']),
    /** Other class names*/
    className: PropTypes.string,
};

export default SvgIcon;