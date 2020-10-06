import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { Avatar } from '../../index';
import { Button } from '../../business';

type Props = {
  label?: string;
  /**
   * Props to render an avatar in the item.
   * See Avatar.tsx
   */
  avatar?: {
    text: string;
  };
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
   * Use together with onClick
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
};

export const SideMenuItem: React.FC<Props> = props => {
  const Tag = props.href ? 'a' : 'button';
  const WrapperTag = props.tag ? props.tag : 'li';
  const handleClick = (e: React.SyntheticEvent) => {
    if (props.href) {
      e.preventDefault();
    }
    props.onClick();
  };
  return (
    <WrapperTag>
      <div
        className={cn('telia-side-menu-item telia-side-menu-item--compact', {
          'telia-side-menu-item--active': props.active,
        })}
      >
        {props.avatar ? (
          <Avatar text={props.avatar.text} onClick={props.onClick} href={props.href} />
        ) : (
          <Button
            icon={props.icon}
            kind={props.active ? (props.href ? 'primary-text' : 'secondary') : 'secondary-text'}
            onClick={props.onClick}
            href={props.href}
          />
        )}
      </div>

      <Tag
        className={cn('telia-side-menu-item', {
          'telia-side-menu-item--active': props.active,
        })}
        onClick={handleClick}
        href={props.href}
      >
        {props.avatar && (
          <div className="telia-side-menu-item-avatar">
            <Avatar size="compact" text={props.avatar.text} />
          </div>
        )}
        {props.icon && <Icon className="telia-side-menu-item-icon" icon={props.icon} />}
        <div className="telia-side-menu-item-label">{props.label}</div>
      </Tag>
    </WrapperTag>
  );
};
