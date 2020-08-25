import React from 'react';
import classnames from 'classnames';
import { colorNames } from '../../constants';

type Props = {
    iconName?: string;
    color?: any; // TODO: PropTypes.oneOf(colorNames)
    className?: string;
    title?: string;
};

/**
 * Status: *In progress*.
 * Category: Style
 *
 * A component that is used to create external reference to svg icons from the icon assets.
 * To show an icon, give the name of the icon (without file ending) and the desired color (defaults to black).
 */

const SvgIcon = ({ iconName, color, className, title, ...rest }: Props) => (
  <svg
    className={classnames('svg-icon', {
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
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

export default SvgIcon;
