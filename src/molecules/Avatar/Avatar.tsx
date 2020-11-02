import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { colors } from '../../index';
type Props = {
  /**
   * Image to fill the avatar.
   */
  img?: string;
  /**
   * alt props for the imgage
   */
  alt?: string;
  /**
   * Text to display in the avatar
   * e.g a user's initials
   */
  text?: string;
  /**
   * Icon to display within the circle
   */
  icon?: IconDefinition;

  /**
   * Makes the avatar smaller.
   * Terminology from the desginers of the Design System
   */
  size?: 'compact' | 'big' | 'default';

  /**
   * Provided an href the avatar vil render as an ancor tag
   */
  href?: string;

  onClick?: () => void;

  color?: keyof typeof colors;

  /**
   *  Status indicator. Online, offline and inactive = green, red and yellow dot
   */
  status?: 'online' | 'offline' | 'inactive';
};

export const Avatar = (props: Props) => {
  const Tag = props.href ? 'a' : props.onClick ? 'button' : 'div';
  const size = props.size ? props.size : 'default';

  const handleClick = (e: React.SyntheticEvent) => {
    if (props.href && props.onClick) {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick();
    }
  };

  // Set ransparent bg color. 24 is 14%. https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  const bgcolor = props.color ? colors[props.color] + '24' : undefined;
  const color = props.color ? colors[props.color] : undefined;

  return (
    <Tag
      className={cn('telia-avatar', `telia-avatar--${size}`)}
      style={{ backgroundColor: bgcolor, color }}
      href={props.href}
      onClick={handleClick}
    >
      {props.img ? (
        <img className="telia-avatar-image" src={props.img} alt={props.alt} />
      ) : props.text ? (
        <div className="telia-avatar-text">{props.text}</div>
      ) : props.icon ? (
        <Icon className="telia-avatar-icon" icon={props.icon} />
      ) : null}
      {props.status && <div className={`telia-avatar-status telia-avatar-${props.status}`} />}
    </Tag>
  );
};
