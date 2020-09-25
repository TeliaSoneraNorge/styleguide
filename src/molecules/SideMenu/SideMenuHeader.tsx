import React from 'react';
import { Avatar } from '../../index';
interface Props {
  label: string;
  labelCompact: string;
  onClick?: () => void;
}
export const SideMenuHeader: React.FC<Props> = props => {
  const Tag = props.onClick ? 'button' : 'div';
  return (
    <>
      <Tag className="telia-side-menu-header telia-side-menu-header--default" onClick={props.onClick}>
        <div className="telia-side-menu-header-label">{props.label}</div>
      </Tag>
      <div className="telia-side-menu-header telia-side-menu-header--compact">
        <Avatar text={props.labelCompact} onClick={props.onClick} />
      </div>
    </>
  );
};
