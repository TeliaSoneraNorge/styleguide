import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import MenuTop from './MenuTop';
import MenuContent from './MenuContent';
import MobileMenu from './MobileMenu';
import FocusTrap, { focusableElementsSelector } from '../../atoms/FocusTrap/FocusTrap';

type Props = {
    menuLinks?: {
        heading?: {
            text?: string;
            url?: string;
        };
        links?: {
            text?: string;
            url?: string;
        }[];
    }[];
    logoImageDesktopPath?: string;
    logoImageInverseDesktopPath?: string;
    logoTitle?: string;
    logoUrl?: string;
    activeIndex?: number;
    activeLinkIndex?: number;
    onSearchSubmit?: (...args: any[]) => any;
    searchLabel?: string;
    searchButtonLabel?: string;
    searchButtonAbortText?: string;
    mobileMenuCloseButtonLabel?: string;
    linkTemplate?: (...args: any[]) => any;
    lockBodyOnMenuOpen?: boolean;
    isLoggedIn?: boolean;
    loginUrl?: string;
    myPageUrl?: string;
    cartUrl?: string;
    isLoading?: boolean;
    onlyLogo?: boolean;
};

/**
 * Status: *In progress*.
 * Category: PageElements
 **/
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const Menu = ({ menuLinks, className, logoImageDesktopPath, logoImageInverseDesktopPath, logoTitle, logoUrl, activeIndex, activeLinkIndex, onSearchSubmit, searchLabel, searchButtonLabel, searchButtonAbortText, mobileMenuCloseButtonLabel, linkTemplate, lockBodyOnMenuOpen, isLoggedIn, loginUrl, myPageUrl, isLoading, onlyLogo, dropdownMenu, onCartClick, numberOfItemsInCart, }: Props) => {
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

  const defaultLinkTemplate = ({
    url,
    ...otherProps
  }: any) => <a href={url} {...otherProps} />;
  const LinkTemplate = linkTemplate || defaultLinkTemplate;
  let openedSubmenu: any = null;

  const isDescendant = (parent: any, child: any) => {
    while (child) {
      if (child === parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  };

  const onGlobalKeyDown = (e: any) => {
    const key = e.which || e.keyCode;

    if (key === 27 && openedSubmenuIndex !== -1) {
      // escape key
      toggleSubmenu(openedSubmenuIndex, e);
    }
  };

  const onClickaway = (e: any) => {
    if (!openedSubmenu) return;
    if (isDescendant(openedSubmenu, e.target)) return;

    setOpenedSubmenuIndex(-1);
    openedSubmenu = null;
  };

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setFocusOnFirstFocusableElement();
      // @ts-expect-error ts-migrate(2345) FIXME: Type 'null' is not assignable to type 'SetStateAct... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    const focusableElements = mobileMenuRef.current.querySelectorAll(focusableElementsSelector);
    if (!focusableElements.length) return;

    focusableElements[0].focus();
  };

  useEffect(setFocusOnFirstFocusableElement);

  const returnFocusOnDialogClose = () => {
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    if (lastActiveMenuContentElement) lastActiveMenuContentElement.focus();
  };

  const toggleSubmenu = (submenuIndex: any, e: any) => {
    e.stopPropagation();

    if (openedSubmenuIndex === submenuIndex) {
      setOpenedSubmenuIndex(-1);
      openedSubmenu = null;
    } else {
      setOpenedSubmenuIndex(submenuIndex);
      openedSubmenu = e.target;
    }
  };

  const renderMobileMenu = (Component: any, additionalProps = {}) => (
    <Component ref={mobileMenuRef} {...additionalProps}>
      <MobileMenu
        isOpen={mobileMenuOpen}
        LinkTemplate={LinkTemplate}
        onMobileMenuToggle={toggleMobileMenu}
        menuLinks={menuLinks}
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'selectedHeaderIndex' does not exist on t... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
          imageInverted: logoImageInverseDesktopPath,
          title: logoTitle,
          url: logoUrl,
        }}
        LinkTemplate={LinkTemplate}
        // @ts-expect-error ts-migrate(2538) FIXME: Type 'undefined' cannot be used as an index type.
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

export default Menu;
