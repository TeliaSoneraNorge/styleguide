import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Spinner from '../../atoms/Spinner';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const KEY_ESC = 27;

const MobileMenuCloseButton = ({
  onClick,
  mobileMenuCloseButtonLabel
}: any) => (
  <button
    className="menu__mobile-close-button"
    onClick={onClick}
    aria-label={mobileMenuCloseButtonLabel ? mobileMenuCloseButtonLabel : 'Lukk'}
  >
    <SvgIcon iconName="ico_delete" color="black" className="menu__mobile-close-button-icon" />
  </button>
);

const MobileMenuHeaderItem = ({
  index,
  onHeaderItemSelected,
  menuLink,
  isActive
}: any) => (
  <li>
    <div
      onClick={() => onHeaderItemSelected(index)}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
      tabIndex="0"
      className={classnames('menu__mobile-heading-item', {
        'menu__mobile-heading-item--active': isActive,
      })}
    >
      <span className="menu__mobile-heading-item-text">{menuLink.heading && menuLink.heading.text}</span>
    </div>
  </li>
);

const MobileMenuHeader = ({
  onMobileMenuToggle,
  menuLinks,
  LinkTemplate,
  selectedIndex,
  onHeaderItemSelected,
  mobileMenuCloseButtonLabel
}: any) => (
  <div className="menu__mobile-header">
    {menuLinks && (
      <ul className="menu__mobile-heading-links">
        {menuLinks.map((menuLink: any, index: any) => (
          <MobileMenuHeaderItem
            key={menuLink.heading ? menuLink.heading.text : index}
            index={index}
            LinkTemplate={LinkTemplate}
            menuLink={menuLink}
            isActive={selectedIndex === index}
            onHeaderItemSelected={onHeaderItemSelected}
          />
        ))}
      </ul>
    )}
    <MobileMenuCloseButton onClick={onMobileMenuToggle} mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel} />
  </div>
);

const MobileSubmenu = ({
  link,
  LinkTemplate,
  onItemSelected
}: any) => (
  <div className="menu__mobile-submenu">
    <span className="menu__mobile-item-with-children">{link.text}</span>
    <div className="menu__mobile-submenu-container">
      {link.subLinks.map((sublink: any, index: any) => (
        <LinkTemplate
          onClick={() => onItemSelected(index, sublink)}
          key={sublink.text}
          className="menu__mobile-subitem link"
          url={sublink.url}
        >
          <span className="link__content">{sublink.text}</span>
        </LinkTemplate>
      ))}
    </div>
  </div>
);

const MobileMenuItem = ({
  link,
  onItemSelected,
  LinkTemplate
}: any) => (
  <React.Fragment>
    {link.url && (
      <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={link.url}>
        <span className="link__content">{link.text}</span>
      </LinkTemplate>
    )}
    {!link.url && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
  </React.Fragment>
);

const MobileMenuItemSection = ({
  menuLink,
  onItemSelected,
  LinkTemplate
}: any) => (
  <section id={`${menuLink.heading && menuLink.heading.text}-mobile-panel`} className="menu__mobile-panel">
    {menuLink.heading && menuLink.heading.url && (
      <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={menuLink.heading.url}>
        <span className="link__content">Forside</span>
      </LinkTemplate>
    )}

    {menuLink.links.map((link: any, index: any) => (
      <MobileMenuItem
        index={index}
        key={link.text}
        link={link}
        onItemSelected={onItemSelected}
        LinkTemplate={LinkTemplate}
      />
    ))}
  </section>
);

type MobileMenuProps = {
    isOpen?: boolean;
    LinkTemplate?: (...args: any[]) => any;
    onMobileMenuToggle?: (...args: any[]) => any;
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
    onMenuItemSelected?: (...args: any[]) => any;
    isLoading?: boolean;
    mobileMenuCloseButtonLabel?: string;
};

const MobileMenu = ({ isOpen, LinkTemplate, onMobileMenuToggle, menuLinks, onMenuItemSelected, isLoading, mobileMenuCloseButtonLabel, }: MobileMenuProps) => {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = (event: any) => {
    // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
    if (event.keyCode === KEY_ESC) onMobileMenuToggle();
  };

  return (
    <div className={classnames('menu__mobile', { 'menu__mobile--open': isOpen })}>
      <MobileMenuHeader
        onMobileMenuToggle={onMobileMenuToggle}
        menuLinks={menuLinks}
        LinkTemplate={LinkTemplate}
        selectedIndex={selectedHeaderIndex}
        onHeaderItemSelected={(index: any) => setSelectedHeaderIndex(index)}
        mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel}
      />
      {isLoading && <Spinner />}
      {menuLinks && (
        <MobileMenuItemSection
          menuLink={menuLinks[selectedHeaderIndex]}
          onItemSelected={onMenuItemSelected}
          LinkTemplate={LinkTemplate}
        />
      )}
    </div>
  );
};

export default MobileMenu;
