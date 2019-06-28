import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const MobileMenuCloseButton = ({ onClick }) => (
  <button className="menu__mobile-close-button" onClick={onClick}>
    <SvgIcon iconName="ico_delete" color="black" className="menu__mobile-close-button-icon" />
  </button>
);

const MobileMenuHeaderItem = ({ index, onHeaderItemSelected, menuLink, isActive }) => (
  <li>
    <div
      onClick={() => onHeaderItemSelected(index)}
      tabIndex="0"
      className={classnames('menu__mobile-heading-item', {
        'menu__mobile-heading-item--active': isActive,
      })}
    >
      <span className="menu__mobile-heading-item-text">{menuLink.heading && menuLink.heading.text}</span>
    </div>
  </li>
);

const MobileMenuHeader = ({ onMobileMenuToggle, menuLinks, LinkTemplate, selectedIndex, onHeaderItemSelected }) => (
  <div className="menu__mobile-header">
    <MobileMenuCloseButton onClick={onMobileMenuToggle} />
    {menuLinks && (
      <ul className="menu__mobile-heading-links">
        {menuLinks.map((menuLink, index) => (
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
  </div>
);

const MobileSubmenu = ({ link, LinkTemplate, onItemSelected }) => (
  <div className="menu__mobile-submenu">
    <span className="menu__mobile-item-with-children">{link.text}</span>
    <div className="menu__mobile-submenu-container">
      {link.subLinks.map((sublink, index) => (
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

const MobileMenuItem = ({ index, link, onItemSelected, LinkTemplate }) => (
  <React.Fragment key={index}>
    {link.url && (
      <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={link.url}>
        <span className="link__content">{link.text}</span>
      </LinkTemplate>
    )}
    {!link.url && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
  </React.Fragment>
);

const MobileMenuItemSection = ({ menuLink, onItemSelected, LinkTemplate }) => (
  <section id={`${menuLink.heading && menuLink.heading.text}-panel`} className="menu__mobile-panel">
    {menuLink.heading && menuLink.heading.url && (
      <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={menuLink.heading.url}>
        <span className="link__content">Forside</span>
      </LinkTemplate>
    )}

    {menuLink.links.map((link, index) => (
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

const MobileMenu = ({
  isOpen,
  LinkTemplate,
  onMobileMenuToggle,
  menuLinks,
  selectedHeaderIndex,
  onMenuItemSelected,
  onMenuHeaderItemSelected,
}) => (
  <div className={classnames('menu__mobile', { 'menu__mobile--open': isOpen })}>
    <MobileMenuHeader
      onMobileMenuToggle={onMobileMenuToggle}
      menuLinks={menuLinks}
      LinkTemplate={LinkTemplate}
      selectedIndex={selectedHeaderIndex}
      onHeaderItemSelected={onMenuHeaderItemSelected}
    />
    {menuLinks && (
      <MobileMenuItemSection
        menuLink={menuLinks[selectedHeaderIndex]}
        onItemSelected={onMenuItemSelected}
        LinkTemplate={LinkTemplate}
      />
    )}
  </div>
);

export default MobileMenu;
