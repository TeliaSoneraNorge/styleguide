import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const getIconName = (item: any) => item.iconName || 'ico_linkarrow';

const MenuItem = ({
  item,
  isEmphasised
}: any) => (
  <li role="none" className={classNames('page-menu__item', { 'page-menu__item--logged-in': isEmphasised })}>
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message */}
    <a role="menuitem" tabIndex="0" className="page-menu__item-link" href={item.url}>
      <span className="page-menu__item-text">{item.text}</span>
      {item.notification && <span className="page-menu__item-notification">{item.notification}</span>}
      <SvgIcon
        className={classNames('page-menu__item-icon', { 'page-menu__item-icon--small': !isEmphasised })}
        iconName={getIconName(item)}
        color="black"
      />
    </a>
  </li>
);

export default MenuItem;
