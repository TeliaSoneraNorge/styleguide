import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *In progress*.
 * Category: Style
 *
 * A component that is used to create external reference to svg icons from the icon assets.
 * To show an icon, give the name of the icon (without file ending) and the desired color (defaults to black).
 */

const SvgIcon = ({ iconName, color, className, title, ...rest }) =>
    <svg
        className={classnames('svg-icon', {
            [className]: className,
            [`svg-icon--${color || 'black'}`]: color,
        })}
        {...rest}>
        {title && <title>{title}</title>}
        <use xlinkHref={`#${iconName}`}></use>
    </svg>;

SvgIcon.propTypes = {
    /** The name of the icon*/
    iconName: PropTypes.string,
    /** The color of the icon (white, black, purple, grey or none)*/
    color: PropTypes.oneOf(['white', 'black', 'purple', 'grey', 'light-grey', 'green', 'dark-grey', 'none']),
    /** Other class names*/
    className: PropTypes.string,
    title: PropTypes.string,
};

export default SvgIcon;