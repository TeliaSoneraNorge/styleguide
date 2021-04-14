import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { Avatar } from '../../index';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { AvatarProps } from '../Avatar/Avatar';

type Props = {
  label?: React.ReactNode;
  /**
   * Props to render an avatar in the item.
   * See Avatar.tsx
   */
  avatar?: AvatarProps;

  /**
   * Icon to display in front of item
   */
  icon?: IconDefinition;
  /**
   * Whether the item is currently active.
   * Eg. we are on a page corresponding to an entry from the meny
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
   * Wheter to render the iten as an li or div.
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
};

export const SideMenuItem: React.FC<Props> = (props) => {
  const Tag = props.href ? 'a' : 'button';
  const WrapperTag = props.tag ? props.tag : 'li';
  const md = useBreakpoint('md');

  const handleClick = (e: React.SyntheticEvent) => {
    if (props.href && props.onClick) {
      e.preventDefault();
    }
    props.onClick();
  };

  return (
    <WrapperTag
      className={cn(
        'telia-side-menu-item',
        {
          'telia-side-menu-item--active': props.active,
          'telia-side-menu-item--grey': props.color === 'grey',
        },
        `telia-side-menu-item--${props.kind ?? 'squared'}`,
        props.className
      )}
    >
      {md ? (
        <Tag className={cn('telia-side-menu-item__desktop')} onClick={handleClick} href={props.href} tabIndex={1}>
          {props.avatar && (
            <div className="telia-side-menu-item__avatar">
              <Avatar size="compact" text={props.avatar.text} img={props.avatar.img} />
            </div>
          )}
          {props.icon && <Icon className="telia-side-menu-item__icon" icon={props.icon} />}
          <div className="telia-side-menu-item-label">{props.label}</div>
          {props.children}
        </Tag>
      ) : (
        <Tag className="telia-side-menu-item__tablet" onClick={props.onClick} href={props.href}>
          {props.avatar ? (
            <Avatar size="compact" text={props.avatar.text} img={props.avatar.img} />
          ) : (
            <Icon className="telia-side-menu-item__icon" icon={props.icon} />
          )}
        </Tag>
      )}
    </WrapperTag>
  );
};
