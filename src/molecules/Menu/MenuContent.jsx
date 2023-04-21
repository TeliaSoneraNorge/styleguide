import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../../atoms/Spinner';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';
import MenuDropdown from './MenuDropdown';
import MenuCart from './MenuCart';
import { UserIcon, MenuIcon } from '../../atoms/Icon';

const ItemWithSubmenu = ({ onToggleSubmenu, isOpen, text, subLinks, LinkTemplate, isActive }) => (
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
      {subLinks.map((sublink) => (
        <LinkTemplate key={sublink.text} className="menu__subitem link" url={sublink.url}>
          <span className="link__content">{sublink.text}</span>
        </LinkTemplate>
      ))}
    </div>
  </button>
);

const MenuLinkItem = ({ link, LinkTemplate, onToggleSubmenu, isSubmenuOpen, isActive }) => (
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

const LoginButton = ({ loginUrl, LinkTemplate, value = 'logg inn' }) => (
  <>
    <LinkTemplate className="menu__login-button menu__login-button__mobile" url={loginUrl}>
      <UserIcon />
    </LinkTemplate>
    <LinkTemplate className="menu__login-button menu__login-button__desktop button button--small" url={loginUrl}>
      <UserIcon style={{ height: '1rem' }} />
      {value}
    </LinkTemplate>
  </>
);

const MyPageButton = ({ myPageUrl, LinkTemplate, value = 'min side' }) => (
  <>
    <LinkTemplate className="menu__mypage-button menu__mypage-button__mobile" url={myPageUrl}>
      <UserIcon />
    </LinkTemplate>
    <LinkTemplate className="menu__mypage-button menu__mypage-button__desktop button button--small" url={myPageUrl}>
      <UserIcon style={{ height: '1rem' }} />
      {value}
    </LinkTemplate>
  </>
);

const MyAppsDropdown = ({ onClick }) => (
  <>
    <button className="menu__mypage-button menu__mypage-button__mobile" onClick={onClick} style={{ marginRight: 0 }}>
      <UserIcon />
    </button>
    <button
      className="menu__mypage-button menu__mypage-button__desktop button button--small"
      onClick={onClick}
      style={{ marginRight: 0 }}
    >
      <UserIcon style={{ height: '1rem' }} />
      mine sider
    </button>
  </>
);

const MobileMenuButton = ({ onMenuToggle }) => (
  <button className="menu__mobile-button" onClick={onMenuToggle} aria-label="Meny">
    <MenuIcon />
  </button>
);

const MenuLogo = ({ logo: { url, image, imageInverted, title }, LinkTemplate, onlyLogo }) => (
  <LinkTemplate url={url} className="menu__logo-container">
    <img className={classnames('menu__logo', { 'menu__logo--only': onlyLogo })} src={image} alt={title} />
    <img className={classnames('menu__logo--inverted', { 'menu__logo--only': onlyLogo })} src={imageInverted} alt="" />
  </LinkTemplate>
);

const MenuContent = ({
  menuLink,
  buttonValues,
  openedSubmenuIndex,
  activeIndex,
  onToggleSubmenu,
  logo,
  LinkTemplate,
  onMobileMenuToggle,
  onSearchSubmit,
  searchLabel,
  searchButtonLabel,
  searchButtonAbortText,
  isLoggedIn,
  loginUrl,
  myPageUrl,
  isLoading,
  onlyLogo,
  dropdownMenu,
  onCartClick,
  numberOfItemsInCart,
  daasLink,
}) => {
  const [menuDropdownIsVisible, setMenuDropdownVisibilty] = useState(!!dropdownMenu?.visible);
  const shouldShowCartIcon = !!onCartClick && numberOfItemsInCart > 0;

  const toggleMenuDropdownVisibilty = () => {
    setMenuDropdownVisibilty(!menuDropdownIsVisible);
  };

  if (onlyLogo) {
    return (
      <div className="menu__content">
        <MenuLogo LinkTemplate={LinkTemplate} logo={logo} onlyLogo={onlyLogo} />
        {shouldShowCartIcon && (
          <>
            <div className="menu__content-panel" />
            <div className="menu__content-right">
              <MenuCart onClick={onCartClick} numberOfItemsInCart={numberOfItemsInCart} />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="menu__content">
      <MenuLogo LinkTemplate={LinkTemplate} logo={logo} />
      {isLoading && <Spinner />}
      {menuLink && (
        <ul id={`${menuLink.heading && menuLink.heading.text}-panel`} className="menu__content-panel">
          {menuLink.links.map((link, index) => (
            <MenuLinkItem
              LinkTemplate={LinkTemplate}
              isSubmenuOpen={openedSubmenuIndex === index}
              isActive={activeIndex === index}
              onToggleSubmenu={(event) => onToggleSubmenu(index, event)}
              key={link.text}
              link={link}
            />
          ))}
        </ul>
      )}
      <div className="menu__content-right">
        {onSearchSubmit && (
          <MenuSearch
            onSubmit={onSearchSubmit}
            searchLabel={searchLabel}
            searchButtonLabel={searchButtonLabel}
            searchButtonAbortText={searchButtonAbortText}
          />
        )}
        {shouldShowCartIcon && <MenuCart onClick={onCartClick} numberOfItemsInCart={numberOfItemsInCart} />}

        {loginUrl && !isLoggedIn && (
          <LoginButton LinkTemplate={LinkTemplate} loginUrl={loginUrl} value={buttonValues?.login} />
        )}
        {myPageUrl && isLoggedIn && !dropdownMenu && (
          <MyPageButton
            LinkTemplate={LinkTemplate}
            myPageUrl={myPageUrl}
            onClick={toggleMenuDropdownVisibilty}
            value={buttonValues?.myPage}
          />
        )}
        {myPageUrl && isLoggedIn && dropdownMenu && (
          <MyAppsDropdown LinkTemplate={LinkTemplate} onClick={toggleMenuDropdownVisibilty} />
        )}
        <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
      </div>

      {menuDropdownIsVisible && (
        <MenuDropdown dropdownMenu={dropdownMenu} isLoggedIn={isLoggedIn} daasLink={daasLink} />
      )}
    </div>
  );
};

MenuContent.propTypes = {
  menuLink: PropTypes.shape({
    links: PropTypes.array,
    heading: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
  buttonValues: PropTypes.shape({
    login: PropTypes.string,
    myPage: PropTypes.string,
  }),
  logo: PropTypes.shape({
    url: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
  openedSubmenuIndex: PropTypes.number,
  onToggleSubmenu: PropTypes.func,
  searchLabel: PropTypes.string,
  searchButtonAbortText: PropTypes.string,
  onlyLogo: PropTypes.bool,
};

export default MenuContent;
