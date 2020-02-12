import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import upperFirst from 'lodash/upperFirst';

import { Icon } from '../Icon';

/**
 * Status: *finished*.
 * Category: Links
 */
const IconLink = ({ className, iconName, icon, iconColor, ...rest }) => (
  <>
    {icon && (
      <a
        className={classnames('icon-link', {
          [className]: className,
        })}
        aria-label={upperFirst(icon)}
        {...rest}
      >
        <Icon icon={icon} className={`icon-link__${iconColor ? iconColor : 'black'}`} />
      </a>
    )}

    {/* DEPRECATED */}
    {iconName && (
      <a
        className={classnames('icon-link-deprecated', {
          [className]: className,
        })}
        aria-label={upperFirst(iconName)}
        {...rest}
      >
        <SvgIcon iconName={iconName} color="black" className="icon-link-deprecated__icon" />
      </a>
    )}
  </>
);

export default IconLink;
