import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*
 * Category: Lists
 */
const UniqueSellingPoints = ({ children, className, ...rest }) => (
  <ul
    className={classnames('unique-selling-points', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </ul>
);

const Item = ({ children, iconName, iconColor, className, ...rest }) => (
  <li
    className={classnames('unique-selling-points__block', {
      [className]: className,
    })}
    {...rest}
  >
    <SvgIcon iconName={iconName} color={iconColor} className="unique-selling-points__icon" />
    <div className="unique-selling-points__block-content">{children}</div>
  </li>
);
UniqueSellingPoints.Item = Item;

UniqueSellingPoints.propTypes = {
  /** Zero or more of UniqueSellingPoints.Item elements. */
  children: PropTypes.node,
  /** For Vertical Listing */
  className: PropTypes.string,
};

UniqueSellingPoints.Item.propTypes = {
  /** Name of icon to be displayed. */
  iconSvg: PropTypes.string,
  /** Color of icon to be displayed. */
  iconColor: PropTypes.string,
};

export default UniqueSellingPoints;
