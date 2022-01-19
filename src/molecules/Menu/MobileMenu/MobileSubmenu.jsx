import React from 'react';
import PropTypes from 'prop-types';

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

MobileSubmenu.propTypes = {
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  onItemSelected: PropTypes.func,
  LinkTemplate: PropTypes.func,
};

export default MobileSubmenu;
