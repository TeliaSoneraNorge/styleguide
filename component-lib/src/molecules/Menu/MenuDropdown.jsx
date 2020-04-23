import React, { useState } from 'react';
import { Link } from '../../index';

const MenuDropdown = props => {
  const { dropDownMenu } = props;
  if (!dropDownMenu) return null;

  const [type, setType] = useState(dropDownMenu.type);
  const [channel] = useState(dropDownMenu.channel);

  return (
    <div className="menu__dropdown">
      <div className="menu__dropdown--button">
        <button
          className={`button button--link ${type === 'B2C' ? 'button--active' : ''}`}
          onClick={() => setType('B2C')}
        >
          Privat
        </button>
        <button
          className={`button button--link ${type === 'B2B' ? 'button--active' : ''}`}
          onClick={() => setType('B2B')}
        >
          Bedrift
        </button>
      </div>

      {type === 'B2C' && (
        <div className="menu__dropdown--links">
          <Link type="bubble-link" href="#" icon="mobile" inverted={channel === 'mobile' ? false : true}>
            Mobiltelefon
          </Link>
          <br />
          <Link type="bubble-link" href="#" icon="wireless" inverted={channel === 'tv-internet' ? false : true}>
            TV og internett
          </Link>
        </div>
      )}

      {type === 'B2B' && (
        <div className="menu__dropdown--links">
          <Link type="bubble-link" href="#" icon="mobile" inverted={channel === 'min-bedrift' ? false : true}>
            Min Bedrift
          </Link>
          <br />
          <Link type="bubble-link" href="#" icon="wireless" inverted={channel === 'min-portal' ? false : true}>
            Min Portal
          </Link>
          <br />
          <Link type="bubble-link" href="#" icon="support" inverted={channel === 'bedriftsnett' ? false : true}>
            Bedriftsnett
          </Link>
        </div>
      )}

      <div className="menu__dropdown--logout">
        <Link href="#">Logg ut</Link>
      </div>
    </div>
  );
};

export default MenuDropdown;
