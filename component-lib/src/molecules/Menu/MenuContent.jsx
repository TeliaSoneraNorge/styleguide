import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../../atoms/Spinner';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';
import MenuDropdown from './MenuDropdown';

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
      {subLinks.map(sublink => (
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

const LoginButton = ({ loginUrl, LinkTemplate }) => (
  <LinkTemplate className="menu__login-button button button--small" url={loginUrl}>
    <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" />
    logg inn
  </LinkTemplate>
);

const MyPageButton = ({ LinkTemplate, onClick }) => (
  <LinkTemplate className="menu__mypage-button button button--small" onClick={onClick}>
    <SvgIcon className="menu__mypage-button-icon" iconName="ico_login" color="none" />
    min side
  </LinkTemplate>
);

const MobileMenuButton = ({ onMenuToggle }) => (
  <button className="menu__mobile-button" onClick={onMenuToggle} aria-label="Meny">
    <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
    <span className="menu__mobile-button-text">Meny</span>
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
  dropDownMenu,
}) => {
  const [menuDropdownIsVisible, setMenuDropdownVisibilty] = useState(dropDownMenu.visible);

  const handleMenuDropdownVisibilty = () => {
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
          {menuLink.links.map((link, index) => (
            <MenuLinkItem
              LinkTemplate={LinkTemplate}
              isSubmenuOpen={openedSubmenuIndex === index}
              isActive={activeIndex === index}
              onToggleSubmenu={event => onToggleSubmenu(index, event)}
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
        {loginUrl && !isLoggedIn && <LoginButton LinkTemplate={LinkTemplate} loginUrl={loginUrl} />}
        {myPageUrl && isLoggedIn && (
          <MyPageButton LinkTemplate={LinkTemplate} myPageUrl={myPageUrl} onClick={handleMenuDropdownVisibilty} />
        )}
        <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
      </div>

      {menuDropdownIsVisible && <MenuDropdown dropDownMenu={dropDownMenu} isLoggedIn={isLoggedIn} />}
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
