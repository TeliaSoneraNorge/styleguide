import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../../../atoms/Spinner';
import MobileMenuItemWithDropdown from './MobileMenuItemWithDropdown';
import MobileMenuHeader from './MobileMenuHeader';
import MobileMenuItem from './MobileMenuItem';
import HorizontalRule from '../../../atoms/HorizontalRule';

const KEY_ESC = 27;

const MobileMenuItemSection = ({ menuLink, onItemSelected, LinkTemplate, value = 'Forside' }) => (
  <section id={`${menuLink.heading && menuLink.heading.text}-mobile-panel`} className="menu__mobile-panel">
    {menuLink.heading && menuLink.heading.url && (
      <>
        <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={menuLink.heading.url}>
          <span className="link__content">{value}</span>
        </LinkTemplate>
        <HorizontalRule />
      </>
    )}

    {menuLink.links.map((link, index) => {
      if (link.subLinks) {
        return (
          <React.Fragment key={link.text}>
            <MobileMenuItemWithDropdown
              index={index}
              link={link}
              onItemSelected={onItemSelected}
              LinkTemplate={LinkTemplate}
            />
            <HorizontalRule />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={link.text}>
            <MobileMenuItem index={index} link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />
            <HorizontalRule />
          </React.Fragment>
        );
      }
    })}
  </section>
);

const MobileMenu = ({
  isOpen,
  LinkTemplate,
  onMobileMenuToggle,
  menuLinks,
  onMenuItemSelected,
  isLoading,
  mobileMenuCloseButtonLabel,
  buttonValues,
}) => {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = (event) => {
    if (event.keyCode === KEY_ESC) onMobileMenuToggle();
  };

  return (
    <>
      <div className="menu__overlay" />
      <div className={classnames('menu__mobile', { 'menu__mobile--open': isOpen })}>
        <MobileMenuHeader
          onMobileMenuToggle={onMobileMenuToggle}
          menuLinks={menuLinks}
          LinkTemplate={LinkTemplate}
          selectedIndex={selectedHeaderIndex}
          onHeaderItemSelected={(index) => setSelectedHeaderIndex(index)}
          mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel}
          closeButtonValue={buttonValues?.closeButton}
        />
        {isLoading && <Spinner />}
        {menuLinks && (
          <MobileMenuItemSection
            menuLink={menuLinks[selectedHeaderIndex]}
            onItemSelected={onMenuItemSelected}
            value={buttonValues?.frontPage}
            LinkTemplate={LinkTemplate}
          />
        )}
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  LinkTemplate: PropTypes.func,
  onMobileMenuToggle: PropTypes.func,
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
  buttonValues: PropTypes.shape({
    frontPage: PropTypes.string,
    closeButton: PropTypes.string,
  }),
  onMenuItemSelected: PropTypes.func,
  isLoading: PropTypes.bool,
  mobileMenuCloseButtonLabel: PropTypes.string,
};

export default MobileMenu;
