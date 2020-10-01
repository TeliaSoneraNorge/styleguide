import React from 'react';
import { Icon, IconDefinition } from '../../index';

interface Props {
  onClick: () => void;
  icon: IconDefinition;
  label?: string;
  href?: string;
  active?: boolean;
}
export const NavFooterItem = (props: Props) => {
  const Tag = props.href ? 'a' : 'button';

  return (
    <li className="telia-nav-footer-item">
      <Tag>
        <Icon icon={props.icon} />
      </Tag>
    </li>
  );
};
