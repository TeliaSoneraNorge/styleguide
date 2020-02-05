import React from 'react';
import classnames from 'classnames';

import Link from '../../atoms/Link';
import { Icon } from '../../atoms/Icon';

function LinkTable({ children, wrapByTwo }) {
  return (
    <ul
      className={classnames('link-table', {
        'link-table--wrap-by-two': wrapByTwo,
      })}
    >
      {children}
    </ul>
  );
}

function LinkTableItem({ text, icon, href }) {
  return (
    <li className="link-table__item">
      <Link href={href} className="link-table__link link--with-icon" iconPosition="before">
        {typeof icon === 'string' ? <Icon className="link-table__icon" icon={icon} /> : icon}
        <span className="link-table__text">{text}</span>
      </Link>
    </li>
  );
}

LinkTable.Item = LinkTableItem;

export default LinkTable;
