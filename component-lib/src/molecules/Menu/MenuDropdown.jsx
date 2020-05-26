import React, { useState } from 'react';
import { Link } from '../../index';

const MenuDropdown = props => {
  const { dropDownMenu, isLoggedIn } = props;
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
          <Link
            type="bubble-link"
            href="https://www.telia.no/"
            icon="mobile"
            inverted={channel === 'mobil' ? false : true}
          >
            <span style={{ marginLeft: '.5rem' }}>Mobil</span>
          </Link>

          {/* ** WHEN LAUNCHING SPRINGSTAR, ACTIVATE THIS ** */}
          <Link type="bubble-link" href="#" icon="wireless" inverted={channel === 'tv-internet' ? false : true}>
            <span style={{ marginLeft: '.5rem' }}>TV og internett</span>
          </Link>
        </div>
      )}

      {type === 'B2B' && (
        <div className="menu__dropdown--links">
          <Link
            type="bubble-link"
            href="https://minbedrift.telia.no/"
            icon="mobile"
            inverted={channel === 'min-bedrift' ? false : true}
          >
            <span style={{ marginLeft: '.5rem' }}>Min Bedrift</span>
          </Link>
          <Link
            type="bubble-link"
            href="https://minportal.telia.no/"
            icon="wireless"
            inverted={channel === 'min-portal' ? false : true}
          >
            <span style={{ marginLeft: '.5rem' }}>Min Portal</span>
          </Link>
          <Link
            type="bubble-link"
            href="https://sb.telia.no/bn/login"
            icon="product-bedriftsnett"
            inverted={channel === 'bedriftsnett' ? false : true}
          >
            <span style={{ marginLeft: '.5rem' }}>Bedriftsnett</span>
          </Link>

          <div style={{ marginBottom: '1rem' }}></div>
          <Link
            href="https://www.telia.no/bedrift/info/"
            icon="list-view"
            iconPosition="before"
            iconColor="black"
            style={{ marginLeft: '2.28rem' }}
          >
            <span style={{ paddingLeft: '.8rem' }}>Andre portaler</span>
          </Link>
        </div>
      )}

      <div className="menu__dropdown--logout">
        {!isLoggedIn && <p className="menu__dropdown--logout--not-logged-in">Logg ut</p>}
        {isLoggedIn && <Link href="http://www.telia.no/logout">Logg ut</Link>}
      </div>
    </div>
  );
};

export default MenuDropdown;
