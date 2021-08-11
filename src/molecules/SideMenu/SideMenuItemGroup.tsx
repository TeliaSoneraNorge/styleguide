import React from 'react';
import cn from 'classnames';
import { Avatar, Icon, IconDefinition, useBreakpoint } from '../..';
import { AvatarProps } from '../Avatar/Avatar';

type Props = {
  'aria-labelledby'?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  label?: React.ReactNode;
  /**
   * Props to render an avatar in the item.
   * See Avatar.tsx
   */
  avatar?: Omit<AvatarProps, 'onClick' | 'href' | 'tabIndex'>;

  /**
   * Icon to display in front of item
   */
  icon?: IconDefinition;
  className?: string;
  color?: 'purple' | 'grey';
  /**
   * @default 'squared'
   */
  kind?: 'rounded' | 'squared';
};

export const SideMenuItemGroup: React.FC<Props> = (props) => {
  const md = useBreakpoint('md');

  return (
    <li
      className={cn(
        'telia-side-menu-item',
        {
          'telia-side-menu-item--grey': props.color === 'grey',
        },
        `telia-side-menu-item--${props.kind ?? 'squared'}`,
        props.className
      )}
    >
      {md ? (
        <li className={cn('telia-side-menu-item__desktop')} onClick={() => props.setOpen(!props.open)} tabIndex={1}>
          {props.avatar && (
            <div className="telia-side-menu-item__avatar">
              <Avatar size="compact" {...props.avatar} />
            </div>
          )}
          {props.icon && <Icon className="telia-side-menu-item__icon" icon={props.icon} />}
          <div className="telia-side-menu-item__label">{props.label}</div>
        </li>
      ) : (
        <li className="telia-side-menu-item__tablet" onClick={() => props.setOpen(!props.open)}>
          {props.avatar ? (
            <Avatar size="compact" {...props.avatar} />
          ) : (
            <Icon className="telia-side-menu-item__icon" icon={props.icon} />
          )}
        </li>
      )}
      {props.open && <ul className="telia-side-menu__group-items">{props.children}</ul>}
    </li>
  );
};
