import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
interface Props {
  onClick: () => void;
  icon: IconDefinition;
  label?: string;
  href?: string;
  active?: boolean;
}
export const MobileNavBarItem = (props: Props) => {
  const Tag = props.href ? 'a' : 'button';

  const clickHandler = (e: React.SyntheticEvent) => {
    if (props.href) {
      e.preventDefault();
    }
    props.onClick();
  };
  return (
    <li>
      <Tag
        className={cn('telia-mobile-nav-bar-item', {
          'telia-mobile-nav-bar-item--active': props.active,
          'telia-mobile-nav-bar-item--compact': !props.label,
        })}
        onClick={clickHandler}
        data-title={props.label}
        href={props.href}
      >
        <Icon icon={props.icon} />
        {props.label ? <div className="telia-mobile-nav-bar-item-label">{props.label}</div> : null}
      </Tag>
    </li>
  );
};
