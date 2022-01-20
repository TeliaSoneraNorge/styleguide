import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowDownIcon } from '../../../atoms/Icon';

import MobileSubmenu from './MobileSubmenu';

const MobileMenuItemWithDropdown = ({ link, onItemSelected, LinkTemplate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="menu__mobile-dropdown-menu">
      {!link.url && (
        <>
          <button className="menu__mobile-dropdown-menu__arrow-button" onClick={() => setIsExpanded(!isExpanded)}>
            <ArrowDownIcon className="menu__mobile-dropdown-menu__arrow-icon" />
          </button>
          <span className="menu__mobile-dropdown-menu__header">{link.text}</span>
          {isExpanded && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
        </>
      )}
    </div>
  );
};

MobileMenuItemWithDropdown.propTypes = {
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  onItemSelected: PropTypes.func,
  LinkTemplate: PropTypes.func,
};

export default MobileMenuItemWithDropdown;
