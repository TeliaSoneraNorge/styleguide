import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { colors } from '../../index';

export type AvatarProps = {
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
   * Only the first two letters will be shown
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

  onClick?: (e: React.SyntheticEvent) => void;

  color?: 'transparent' | keyof typeof colors;

  style?: React.CSSProperties;
  className?: string;
  tabIndex?: number;
} & (
  | {
      /**
       *  Status indicator. Online, offline and inactive = green, red and yellow dot
       */
      status?: 'online' | 'offline' | 'inactive';
    }
  | {
      /**
       *  Status indicator. Online, offline and inactive = green, red and yellow dot
       */
      avatar?: React.ReactNode;
    }
);

export const Avatar = (props: AvatarProps) => {
  const Tag = props.href ? 'a' : props.onClick ? 'button' : 'div';
  const size = props.size ? props.size : 'default';
  const status = 'status' in props && props.status ? props.status : 'online';
  const tabIndex = props.tabIndex ? props.tabIndex : Tag !== 'div' ? 0 : undefined;

  const handleClick = (e: React.SyntheticEvent) => {
    if (props.href && props.onClick) {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  // Set ransparent bg color. 24 is 14%. https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  const bgcolor = props.color
    ? props.color === 'transparent'
      ? 'transparent'
      : colors[props.color] + '24'
    : undefined;
  const color = props.color && props.color !== 'transparent' ? colors[props.color] : undefined;

  return (
    <Tag
      className={cn('telia-avatar', `telia-avatar--${size}`, props.className)}
      style={{ backgroundColor: bgcolor, color, ...props.style }}
      href={props.href}
      onClick={handleClick}
      tabIndex={tabIndex}
    >
      {props.img && <img className="telia-avatar__image" src={props.img} alt={props.alt} />}
      {props.text ? (
        <div className={cn('telia-avatar__text', props.img && 'telia-avatar__text--absolute')}>
          {props.text.slice(0, 2)}
        </div>
      ) : props.icon ? (
        <Icon className={cn('telia-avatar__icon', props.img && 'telia-avatar__icon--absolute')} icon={props.icon} />
      ) : null}
      {'status' in props && <div className={`telia-avatar__status telia-avatar__status--${status}`} />}
      {'avatar' in props && props.avatar && <div className="telia-avatar__couple">{props.avatar}</div>}
    </Tag>
  );
};
