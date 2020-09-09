import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import MenuTop from './MenuTop';
import MenuContent from './MenuContent';
import MobileMenu from './MobileMenu';
import FocusTrap, { focusableElementsSelector } from '../../atoms/FocusTrap/FocusTrap';

/**
 * Status: *In progress*.
 * Category: PageElements
 **/
const Menu = ({
  menuLinks,
  className,
  logoImageDesktopPath,
  logoImageInverseDesktopPath,
  logoTitle,
  logoUrl,
  activeIndex,
  activeLinkIndex,
  onSearchSubmit,
  searchLabel,
  searchButtonLabel,
  searchButtonAbortText,
  mobileMenuCloseButtonLabel,
  linkTemplate,
  lockBodyOnMenuOpen,
  isLoggedIn,
  loginUrl,
  myPageUrl,
  isLoading,
  onlyLogo,
  dropdownMenu,
  onCartClick,
  numberOfItemsInCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastActiveMenuContentElement, setLastActiveMenuContentElement] = useState(undefined);
  const [openedSubmenuIndex, setOpenedSubmenuIndex] = useState(-1);
  const mobileMenuRef = useRef();

  useEffect(() => {
    document.addEventListener('click', onClickaway);
    document.addEventListener('keydown', onGlobalKeyDown);
    return () => {
      document.removeEventListener('click', onClickaway);
      document.removeEventListener('keydown', onGlobalKeyDown);
    };
  });

  const defaultLinkTemplate = ({ url, ...otherProps }) => <a href={url} {...otherProps} />;
  const LinkTemplate = linkTemplate || defaultLinkTemplate;
  let openedSubmenu = null;

  const isDescendant = (parent, child) => {
    while (child) {
      if (child === parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  };

  const onGlobalKeyDown = e => {
    const key = e.which || e.keyCode;

    if (key === 27 && openedSubmenuIndex !== -1) {
      // escape key
      toggleSubmenu(openedSubmenuIndex, e);
    }
  };

  const onClickaway = e => {
    if (!openedSubmenu) return;
    if (isDescendant(openedSubmenu, e.target)) return;

    setOpenedSubmenuIndex(-1);
    openedSubmenu = null;
  };

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setFocusOnFirstFocusableElement();
      setLastActiveMenuContentElement(document.activeElement);
      if (lockBodyOnMenuOpen) document.body.classList.add('body--locked');
    } else {
      returnFocusOnDialogClose();
      if (lockBodyOnMenuOpen) document.body.classList.remove('body--locked');
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const setFocusOnFirstFocusableElement = () => {
    if (!mobileMenuRef.current) return;
    const focusableElements = mobileMenuRef.current.querySelectorAll(focusableElementsSelector);
    if (!focusableElements.length) return;

    focusableElements[0].focus();
  };

  useEffect(setFocusOnFirstFocusableElement);

  const returnFocusOnDialogClose = () => {
    if (lastActiveMenuContentElement) lastActiveMenuContentElement.focus();
  };

  const toggleSubmenu = (submenuIndex, e) => {
    e.stopPropagation();

    if (openedSubmenuIndex === submenuIndex) {
      setOpenedSubmenuIndex(-1);
      openedSubmenu = null;
    } else {
      setOpenedSubmenuIndex(submenuIndex);
      openedSubmenu = e.target;
    }
  };

  const renderMobileMenu = (Component, additionalProps = {}) => (
    <Component ref={mobileMenuRef} {...additionalProps}>
      <MobileMenu
        isOpen={mobileMenuOpen}
        LinkTemplate={LinkTemplate}
        onMobileMenuToggle={toggleMobileMenu}
        menuLinks={menuLinks}
        selectedHeaderIndex={activeIndex}
        onMenuItemSelected={toggleMobileMenu}
        isLoading={isLoading}
        mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel}
      />
    </Component>
  );

  return (
    <div className={classnames('menu', { [className]: className })}>
      {!onlyLogo && menuLinks && menuLinks.length > 1 && (
        <MenuTop activeIndex={activeIndex} menuLinks={menuLinks} LinkTemplate={LinkTemplate} />
      )}

      <MenuContent
        logo={{
          image: logoImageDesktopPath,
          imageInverted: logoImageInverseDesktopPath,
          title: logoTitle,
          url: logoUrl,
        }}
        LinkTemplate={LinkTemplate}
        menuLink={menuLinks && menuLinks[activeIndex]}
        onToggleSubmenu={toggleSubmenu}
        openedSubmenuIndex={openedSubmenuIndex}
        activeIndex={activeLinkIndex}
        loginUrl={loginUrl}
        onMobileMenuToggle={toggleMobileMenu}
        onSearchSubmit={onSearchSubmit}
        searchLabel={searchLabel}
        searchButtonLabel={searchButtonLabel}
        searchButtonAbortText={searchButtonAbortText}
        isLoggedIn={isLoggedIn}
        myPageUrl={myPageUrl}
        isLoading={isLoading}
        onlyLogo={onlyLogo}
        dropdownMenu={dropdownMenu}
        onCartClick={onCartClick}
        numberOfItemsInCart={numberOfItemsInCart}
      />
      {!onlyLogo && mobileMenuOpen && renderMobileMenu(FocusTrap, { as: 'div' })}
    </div>
  );
};

Menu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
      }),
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    })
  ),
  logoImageDesktopPath: PropTypes.string,
  logoImageInverseDesktopPath: PropTypes.string,
  logoTitle: PropTypes.string,
  logoUrl: PropTypes.string,
  activeIndex: PropTypes.number,
  activeLinkIndex: PropTypes.number,
  onSearchSubmit: PropTypes.func,
  searchLabel: PropTypes.string,
  searchButtonLabel: PropTypes.string,
  searchButtonAbortText: PropTypes.string,
  mobileMenuCloseButtonLabel: PropTypes.string,
  linkTemplate: PropTypes.func,
  lockBodyOnMenuOpen: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  loginUrl: PropTypes.string,
  myPageUrl: PropTypes.string,
  cartUrl: PropTypes.string,
  isLoading: PropTypes.bool,
  onlyLogo: PropTypes.bool,
};

export default Menu;
