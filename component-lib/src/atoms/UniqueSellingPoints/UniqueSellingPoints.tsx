import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type UniqueSellingPointsProps = {
    children?: React.ReactNode;
    className?: string;
};

/**
 * Status: *finished*
 * Category: Lists
 */
const UniqueSellingPoints = ({ children, className, ...rest }: UniqueSellingPointsProps) => (
  <ul
    className={classnames('unique-selling-points', {
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </ul>
);

const Item = ({
  children,
  iconName,
  iconColor,
  className,
  ...rest
}: any) => (
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '({ ch... Remove this comment to see the full error message
UniqueSellingPoints.Item.propTypes = {
  /** Name of icon to be displayed. */
  iconSvg: PropTypes.string,
  /** Color of icon to be displayed. */
  iconColor: PropTypes.string,
};

export default UniqueSellingPoints;
