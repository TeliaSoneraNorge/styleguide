import React from 'react';
import cn from 'classnames';
import { Avatar, Icon, IconDefinition, useBreakpoint } from '../..';
import { AvatarProps } from '../Avatar/Avatar';
import { NotificationWrapper } from './NotificationWrapper';

type Props = {
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
  hasNotification?: boolean;
  numberOfNotifications?: number;
  /**
   * Whether the item is currently active.
   * Eg. we are on a page corresponding to an entry from the menu
   */
  active?: boolean;
  /**
   * Action to execute on click item
   */
  onClick: () => void;
  /**
   * If the item should collapse to only show icons
   * @default true
   */
  collapse?: boolean;
};

export const SideMenuItemGroup: React.FC<Props> = (props) => {
  const md = useBreakpoint('md');
  const {
    open,
    label,
    avatar,
    icon,
    className,
    color,
    kind = 'squared',
    active,
    onClick,
    collapse = true,
    hasNotification,
    numberOfNotifications,
  } = props;

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
      {md || !collapse ? (
        <button
          className="telia-side-menu-item__action-element"
          tabIndex={1}
          onClick={handleClick}
          aria-labelledby="side-menu-group-item-label"
        >
          {avatar && (
            <div className="telia-side-menu-item__avatar">
              <Avatar size="compact" {...avatar} />
            </div>
          )}
          {icon && (
            <div className="telia-side-menu-item__icon">
              <Icon icon={icon} />
            </div>
          )}
          <NotificationWrapper numberOfNotifications={numberOfNotifications} hasNotification={hasNotification}>
            <div id="side-menu-group-item-label" className="telia-side-menu-item__label">
              {label}
            </div>
          </NotificationWrapper>
        </button>
      ) : (
        <button
          className="telia-side-menu-item__action-element"
          tabIndex={1}
          onClick={handleClick}
          aria-labelledby="side-menu-group-item-label"
        >
          <NotificationWrapper
            position="on-top-left"
            numberOfNotifications={numberOfNotifications}
            hasNotification={hasNotification}
          >
            {avatar && (
              <div className="telia-side-menu-item__avatar">
                <Avatar size="compact" {...avatar} />
              </div>
            )}
            {icon && (
              <div className="telia-side-menu-item__icon">
                <Icon icon={icon} />
              </div>
            )}
          </NotificationWrapper>
        </button>
      )}
      <ul
        className={cn('telia-side-menu__group-items', { 'telia-side-menu__group-items--open': open })}
        aria-hidden={!open}
      >
        {props.children}
      </ul>
    </li>
  );
};
