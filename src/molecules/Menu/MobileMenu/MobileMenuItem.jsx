import React from 'react';
import PropTypes from 'prop-types';
import MobileSubmenu from './MobileSubmenu';

const MobileMenuItem = ({ link, onItemSelected, LinkTemplate }) => (
  <React.Fragment>
    {link.url && (
      <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={link.url}>
        <span className="link__content">{link.text}</span>
      </LinkTemplate>
    )}
    {!link.url && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
  </React.Fragment>
);

MobileMenuItem.propTypes = {
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  onItemSelected: PropTypes.func,
  LinkTemplate: PropTypes.func,
};

export default MobileMenuItem;
