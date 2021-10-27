import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { Avatar } from '../../index';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { AvatarProps } from '../Avatar/Avatar';
import { Badge } from '../../atoms/Badge';
import { NotificationWrapper } from './NotificationWrapper';

type Props = {
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
  /**
   * Whether the item is currently active.
   * Eg. we are on a page corresponding to an entry from the menu
   */
  active?: boolean;
  /**
   * Renders the item as an anchor tag.
   */
  href?: string;

  /**
   * Action to execute on click item
   */
  onClick: () => void;

  /**
   * Whether to render the item as an li or div.
   * The outermost tag should always be an <li>.
   *
   * If you need custom logic and markup causing the SideMenuItem
   * to be rendered deeper in the SideMenu, set the  tag='div' on SideMenuItem
   * and set your custom wrapper to an <li>.
   */
  tag?: 'div' | 'li';

  className?: string;

  color?: 'purple' | 'grey';

  /**
   * @default 'squared'
   */
  kind?: 'rounded' | 'squared';

  hasNotification?: boolean;
  numberOfNotifications?: number;

  /**
   * If the item should collapse to only show icons
   * @default true
   */
  collapse?: boolean;
  tabIndex?: number;
};

export const SideMenuItem: React.FC<Props> = (props) => {
  const {
    onClick,
    active,
    avatar,
    className,
    color,
    hasNotification,
    href,
    icon,
    kind,
    label,
    numberOfNotifications,
    tabIndex,
    tag,
    children,
  } = props;
  const Tag = href ? 'a' : 'button';
  const WrapperTag = tag ? tag : 'li';
  const collapse = props.collapse ?? true;
  const md = useBreakpoint('md');

  const handleClick = (e: React.SyntheticEvent) => {
    if (href && onClick) {
      e.preventDefault();
    }
    onClick();
  };

  return (
    <WrapperTag
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
        <Tag
          className="telia-side-menu-item__action-element"
          onClick={handleClick}
          href={href}
          tabIndex={tabIndex ?? 1}
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
          <NotificationWrapper hasNotification={hasNotification} numberOfNotifications={numberOfNotifications}>
            <div id="side-menu-group-item-label" className="telia-side-menu-item__label">
              {label}
            </div>
          </NotificationWrapper>
          {children}
        </Tag>
      ) : (
        <Tag
          className="telia-side-menu-item__action-element telia-side-menu-item__action-element--collapse"
          onClick={onClick}
          tabIndex={tabIndex ?? 1}
          href={href}
        >
          <NotificationWrapper
            position="on-top-left"
            hasNotification={hasNotification}
            numberOfNotifications={numberOfNotifications}
          >
            <>
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
            </>
          </NotificationWrapper>
        </Tag>
      )}
    </WrapperTag>
  );
};
