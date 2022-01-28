import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CloseIcon } from '../../../atoms/Icon';

const MobileMenuCloseButton = ({ onClick, mobileMenuCloseButtonLabel }) => (
  <button
    className="menu__mobile-close-button"
    onClick={onClick}
    aria-label={mobileMenuCloseButtonLabel ? mobileMenuCloseButtonLabel : 'Lukk'}
  >
    <span>Lukk</span>
    <CloseIcon className="menu__mobile-close-button-icon" />
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

const MobileMenuHeader = ({
  onMobileMenuToggle,
  menuLinks,
  LinkTemplate,
  selectedIndex,
  onHeaderItemSelected,
  mobileMenuCloseButtonLabel,
}) => (
  <div className="menu__mobile-header">
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
    <MobileMenuCloseButton onClick={onMobileMenuToggle} mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel} />
  </div>
);

MobileMenuHeader.propTypes = {
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
  mobileMenuCloseButtonLabel: PropTypes.string,
};

export default MobileMenuHeader;
