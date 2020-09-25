import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';

type Props = {
  avatar?: React.ReactNode;
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
    <>
      <Tag
        className={cn('telia-side-menu-item telia-side-menu-item--defualt', {
          'telia-side-menu-item--active': props.active,
        })}
        onClick={handleClick}
        href={props.href}
      >
        {props.avatar}
        {props.icon && <Icon className="telia-side-menu-item-icon" icon={props.icon} />}
        <div className="telia-side-menu-item-label">{props.label}</div>
      </Tag>
      {/* <div>
        <Button/>
    </div> */}
    </>
  );
};
