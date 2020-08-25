import React, { useState } from 'react';
import classnames from 'classnames';
import Spinner from '../../atoms/Spinner';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';
import MenuDropdown from './MenuDropdown';
import MenuCart from './MenuCart';

const ItemWithSubmenu = ({
  onToggleSubmenu,
  isOpen,
  text,
  subLinks,
  LinkTemplate,
  isActive
}: any) => (
  <button
    className={classnames('button--stripped menu__item link menu__submenu', { 'menu__submenu--active': isActive })}
    onClick={onToggleSubmenu}
  >
    <span className="menu__submenu-link">
      {text}
      <SvgIcon
        iconName="ico_dropArrow"
        color="purple"
        className={classnames('icon-link__icon menu__submenu-icon', { 'menu__submenu-icon--open': isOpen })}
      />
    </span>
    <div className={classnames('menu__submenu-container', { 'menu__submenu-container--open': isOpen })}>
      {subLinks.map((sublink: any) => <LinkTemplate key={sublink.text} className="menu__subitem link" url={sublink.url}>
        <span className="link__content">{sublink.text}</span>
      </LinkTemplate>)}
    </div>
  </button>
);

const MenuLinkItem = ({
  link,
  LinkTemplate,
  onToggleSubmenu,
  isSubmenuOpen,
  isActive
}: any) => (
  <li>
    {link.url && (
      <LinkTemplate className={classnames('menu__item link', { 'menu__item--active': isActive })} url={link.url}>
        <span className="link__content">{link.text}</span>
      </LinkTemplate>
    )}
    {!link.url && link.subLinks && (
      <ItemWithSubmenu
        text={link.text}
        subLinks={link.subLinks}
        onToggleSubmenu={onToggleSubmenu}
        isOpen={isSubmenuOpen}
        isActive={isActive}
        LinkTemplate={LinkTemplate}
      />
    )}
  </li>
);

const LoginButton = ({
  loginUrl,
  LinkTemplate
}: any) => (
  <LinkTemplate className="menu__login-button button button--small" url={loginUrl}>
    <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" />
    logg inn
  </LinkTemplate>
);

const MyPageButton = ({
  myPageUrl,
  LinkTemplate
}: any) => (
  <LinkTemplate className="menu__mypage-button button button--small" url={myPageUrl}>
    <SvgIcon className="menu__mypage-button-icon" iconName="ico_login" color="none" />
    min side
  </LinkTemplate>
);

const MyAppsDropdown = ({
  onClick
}: any) => (
  <button className="menu__mypage-button button button--small" onClick={onClick} style={{ marginRight: 0 }}>
    <SvgIcon className="menu__mypage-button-icon" iconName="ico_login" color="none" />
    mine sider
  </button>
);

const MobileMenuButton = ({
  onMenuToggle
}: any) => (
  <button className="menu__mobile-button" onClick={onMenuToggle} aria-label="Meny">
    <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
    <span className="menu__mobile-button-text">Meny</span>
  </button>
);

const MenuLogo = ({
  logo: { url, image, imageInverted, title },
  LinkTemplate,
  onlyLogo
}: any) => (
  <LinkTemplate url={url} className="menu__logo-container">
    <img className={classnames('menu__logo', { 'menu__logo--only': onlyLogo })} src={image} alt={title} />
    <img className={classnames('menu__logo--inverted', { 'menu__logo--only': onlyLogo })} src={imageInverted} alt="" />
  </LinkTemplate>
);

type MenuContentProps = {
    menuLink?: {
        links?: any[];
        heading?: {
            text?: string;
        };
    };
    logo?: {
        url?: string;
        image?: string;
        title?: string;
    };
    openedSubmenuIndex?: number;
    onToggleSubmenu?: (...args: any[]) => any;
    searchLabel?: string;
    searchButtonAbortText?: string;
    onlyLogo?: boolean;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'activeIndex' does not exist on type 'Men... Remove this comment to see the full error message
const MenuContent = ({ menuLink, openedSubmenuIndex, activeIndex, onToggleSubmenu, logo, LinkTemplate, onMobileMenuToggle, onSearchSubmit, searchLabel, searchButtonLabel, searchButtonAbortText, isLoggedIn, loginUrl, myPageUrl, isLoading, onlyLogo, dropdownMenu, onCartClick, numberOfItemsInCart, }: MenuContentProps) => {
  const [menuDropdownIsVisible, setMenuDropdownVisibilty] = useState(!!dropdownMenu?.visible);
  const shouldShowCartIcon = !!onCartClick && numberOfItemsInCart > 0;

  const toggleMenuDropdownVisibilty = () => {
    setMenuDropdownVisibilty(!menuDropdownIsVisible);
  };

  if (onlyLogo) {
    return (
      <div className="menu__content">
        <MenuLogo LinkTemplate={LinkTemplate} logo={logo} onlyLogo={onlyLogo} />
      </div>
    );
  }

  return (
    <div className="menu__content">
      <MenuLogo LinkTemplate={LinkTemplate} logo={logo} />
      {isLoading && <Spinner />}
      {menuLink && (
        <ul id={`${menuLink.heading && menuLink.heading.text}-panel`} className="menu__content-panel">
          {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
          {menuLink.links.map((link, index) => (
            <MenuLinkItem
              LinkTemplate={LinkTemplate}
              isSubmenuOpen={openedSubmenuIndex === index}
              isActive={activeIndex === index}
              // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
              onToggleSubmenu={(event: any) => onToggleSubmenu(index, event)}
              key={link.text}
              link={link}
            />
          ))}
        </ul>
      )}
      <div className="menu__content-right">
        {shouldShowCartIcon ? <MenuCart onClick={onCartClick} numberOfItemsInCart={numberOfItemsInCart} /> : null}
        {onSearchSubmit && (
          <MenuSearch
            onSubmit={onSearchSubmit}
            searchLabel={searchLabel}
            searchButtonLabel={searchButtonLabel}
            searchButtonAbortText={searchButtonAbortText}
          />
        )}
        {loginUrl && !isLoggedIn && <LoginButton LinkTemplate={LinkTemplate} loginUrl={loginUrl} />}
        {myPageUrl && isLoggedIn && !dropdownMenu && (
          <MyPageButton LinkTemplate={LinkTemplate} myPageUrl={myPageUrl} onClick={toggleMenuDropdownVisibilty} />
        )}
        {myPageUrl && isLoggedIn && dropdownMenu && (
          <MyAppsDropdown LinkTemplate={LinkTemplate} onClick={toggleMenuDropdownVisibilty} />
        )}
        <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
      </div>

      {menuDropdownIsVisible && <MenuDropdown dropdownMenu={dropdownMenu} isLoggedIn={isLoggedIn} />}
    </div>
  );
};

export default MenuContent;
