import React, { CSSProperties } from 'react';
import cs from 'classnames';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import upperFirst from 'lodash/upperFirst';

import { Icon } from '../Icon';
import { IconDefinition } from '../Icon/Icon.generated';

export interface IconLinkProps {
  /**
   * Any additional CSS classes.
   */
  className?: string;

  /**
   * Any additional CSS properties.
   */
  style?: CSSProperties;

  /**
   * The icon to show. Must be a valid `IconDefinition`.
   */
  icon?: IconDefinition;

  /**
   * @deprecated Use `icon` prop to use the new icons.
   */
  iconName?: string;

  /**
   * The icon color. Also affects state colors (e.g. _hover_).
   */
  iconColor?: 'black' | 'core-purple' | 'white';

  href: string;
}

/**
 * Status: *finished*.
 * Category: Links
 */
const IconLink: React.FC<IconLinkProps> = ({ className, style, iconName, icon, iconColor, ...rest }) => {
  // Deprecated, old iconName style
  if (iconName) {
    return (
      <a className={cs('icon-link-deprecated', className)} aria-label={upperFirst(iconName)} {...rest}>
        <SvgIcon iconName={iconName} color="black" className="icon-link-deprecated__icon" />
      </a>
    );
  }

  return (
    <a className={cs('icon-link', className)} aria-label={upperFirst(icon)} {...rest}>
      <Icon icon={icon} className={`icon-link__${iconColor ? iconColor : 'black'}`} />
    </a>
  );
};

export default IconLink;
