import React from 'react';
import classnames from 'classnames';

import SvgIcon from '../../atoms/SvgIcon';
import Link from '../../atoms/Link';

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
        <SvgIcon iconName={icon} className="link-table__icon" />
        <span className="link-table__text">{text}</span>
      </Link>
    </li>
  );
}

LinkTable.Item = LinkTableItem;

export default LinkTable;
