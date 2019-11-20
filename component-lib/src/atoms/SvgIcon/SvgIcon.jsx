import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { colorNames } from '../../constants';

/**
 * Status: *In progress*.
 * Category: Style
 *
 * A component that is used to create external reference to svg icons from the icon assets.
 * To show an icon, give the name of the icon (without file ending) and the desired color (defaults to black).
 */

const SvgIcon = ({ iconName, color, className, title, ...rest }) => (
  <svg
    className={classnames('svg-icon', {
      [className]: className,
      [`svg-icon--${color || 'black'}`]: color,
    })}
    aria-hidden={title ? undefined : true}
    {...rest}
  >
    {title && <title>{title}</title>}
    <use xlinkHref={`#${iconName}`}></use>
  </svg>
);

SvgIcon.propTypes = {
  /** The name of the icon*/
  iconName: PropTypes.string,
  /** The color of the icon (white, black, purple, grey or none)*/
  color: PropTypes.oneOf(colorNames),
  /** Other class names*/
  className: PropTypes.string,
  title: PropTypes.string,
};

export default SvgIcon;
