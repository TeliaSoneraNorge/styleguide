import React from 'react';
import PropTypes from 'prop-types';

const MobileMenuItem = ({ link, onItemSelected, LinkTemplate }) => (
  <>
    <LinkTemplate onClick={onItemSelected} className="menu__mobile-item link" url={link.url}>
      <span className="link__content">{link.text}</span>
    </LinkTemplate>
  </>
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
