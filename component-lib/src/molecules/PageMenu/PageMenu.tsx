import React from 'react';
import classNames from 'classnames';

import { preventDefault } from '../../utils';
import MenuOverlay from './MenuOverlay';
import MenuTopPanel from './MenuTopPanel';
import MenuBar from './MenuBar';
import Tabs from '../../molecules/Tabs/Tabs';

type Props = {
    menuLinks?: {
        heading?: string;
        loggedInLinks?: {
            text?: string;
            url?: string;
            icon?: string;
        }[];
        loggedOutLinks?: {
            text?: string;
            url?: string;
            icon?: string;
        }[];
    }[];
    menuId?: string;
    isExpanded?: boolean;
    onClickClose?: (...args: any[]) => any;
    searchUrl?: string;
    logoutLink?: string;
    fixedPosition?: boolean;
    isLoggedIn?: boolean;
    menuSelectedTabIndex?: number;
    onTabSelect?: (...args: any[]) => any;
};

/**
 * Status: *Deprecated*
 * Category: PageElements
 *
 * This component will be replaces with the Menu-component
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'onLogoutClick' does not exist on type 'P... Remove this comment to see the full error message
const PageMenu = ({ menuLinks = [], menuId, isExpanded, onClickClose, searchUrl, fixedPosition, isLoggedIn, menuSelectedTabIndex, onTabSelect, logoutLink = '#', onLogoutClick, }: Props) => (
  <div>
    <div
      className={classNames('page-menu', { 'page-menu--fixed': fixedPosition }, { 'page-menu--expanded': isExpanded })}
      id={menuId || 'page-header-menu'}
    >
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'isExpanded' does not exist on type 'Intr... Remove this comment to see the full error message */}
      <MenuTopPanel isExpanded={isExpanded} menuId={menuId} onClickClose={onClickClose} searchUrl={searchUrl} />
      <nav aria-label="Main menu">
        <div className="page-menu__selection">
          <Tabs
            uniqueId="menu-tabs"
            onSelect={onTabSelect}
            selectedIndex={menuSelectedTabIndex}
            skipPanelRendering={true}
            noMargin={true}
            compact={true}
          >
            {menuLinks.map(menuLink => (
              <Tabs.Tab key={menuLink.heading} heading={menuLink.heading} />
            ))}
          </Tabs>
        </div>

        {menuLinks.map((menuLink, i) => (
          <Tabs.TabPanel
            key={menuLink.heading}
            index={i}
            uniqueId="separated-tabs"
            isSelected={menuSelectedTabIndex === i}
          >
            <div
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'contentAboveItems' does not exist on typ... Remove this comment to see the full error message
              className={classNames('page-menu__content', { 'page-menu__content--empty': !menuLink.contentAboveItems })}
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'contentAboveItems' does not exist on typ... Remove this comment to see the full error message
              dangerouslySetInnerHTML={{ __html: menuLink.contentAboveItems }}
            />
            <MenuBar ariaLabel="innlogget brukermeny" items={menuLink.loggedInLinks} isEmphasised />
            <MenuBar items={menuLink.loggedOutLinks} />
          </Tabs.TabPanel>
        ))}

        {isLoggedIn && (
          <ul className="page-menu__item-list">
            <li className="page-menu__item">
              <div className="page-menu__item-link">
                <a className="page-menu__log-out-button link" href={logoutLink} onClick={preventDefault(onLogoutClick)}>
                  Logg ut
                </a>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </div>
    {fixedPosition && <MenuOverlay onClick={onClickClose} active={isExpanded} />}
  </div>
);

export default PageMenu;
