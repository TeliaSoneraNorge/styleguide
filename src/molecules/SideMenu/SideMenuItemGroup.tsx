import React from 'react';
import cn from 'classnames';
import { Avatar, Icon, IconDefinition, useBreakpoint } from '../..';
import { AvatarProps } from '../Avatar/Avatar';

type Props = {
  'aria-labelledby'?: string;
  open: boolean;
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
  /**
   * Whether the item is currently active.
   * Eg. we are on a page corresponding to an entry from the menu
   */
  active?: boolean;
  /**
   * Action to execute on click item
   */
  onClick: () => void;
};

export const SideMenuItemGroup: React.FC<Props> = (props) => {
  const md = useBreakpoint('md');
  const { open, label, avatar, icon, className, color, kind = 'squared', active, onClick } = props;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li
      className={cn(
        'telia-side-menu-item',
        {
          'telia-side-menu-item--active': active,
          'telia-side-menu-item--grey': color === 'grey',
        },
        `telia-side-menu-item--${kind ?? 'squared'}`,
        className
      )}
    >
      <a>
        <button className={cn('telia-side-menu-item__desktop')} tabIndex={1} onClick={handleClick}>
          {avatar && (
            <div className="telia-side-menu-item__avatar">
              <Avatar size="compact" {...avatar} />
            </div>
          )}
          {icon && <Icon className="telia-side-menu-item__icon" icon={icon} />}
          <div className="telia-side-menu-item__label">{label}</div>
        </button>

        {open && <ul className="telia-side-menu__group-items">{props.children}</ul>}
      </a>
    </li>
  );
};
