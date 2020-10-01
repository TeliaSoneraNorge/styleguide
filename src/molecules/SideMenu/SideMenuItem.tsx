import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { Avatar } from '../../index';
import { Button } from '../../business';

type Props = {
  avatar?: {
    text: string;
  };
  icon?: IconDefinition;
  label?: string;
  active?: boolean;
  href?: string;
  onClick: () => void;
};

export const SideMenuItem: React.FC<Props> = props => {
  const Tag = props.href ? 'a' : 'button';

  const handleClick = (e: React.SyntheticEvent) => {
    if (props.href) {
      e.preventDefault();
    }
    props.onClick();
  };
  return (
    <li>
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
    </li>
  );
};
