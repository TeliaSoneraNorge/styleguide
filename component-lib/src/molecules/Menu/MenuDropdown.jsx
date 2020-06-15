import React, { useState } from 'react';
import { Link } from '../../index';

const MenuDropdown = props => {
  const { dropdownMenu, isLoggedIn } = props;
  if (!dropdownMenu) return null;

  const [type, setType] = useState(dropdownMenu.type);

  function checkEnv(host) {
    if (host === 'stage.telia.no' || host === 'at-min-side.telia.no') return 'https://stage.telia.no/min-side/';
    if (host === 'pt.stage.telia.no') return 'https://pt.stage.telia.no/min-side/';

    return false;
  }
  const stageEnv = checkEnv(window.location.host);

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
            href={stageEnv ? stageEnv : 'https://www.telia.no/min-side/'}
            icon="mobile"
            inverted={dropdownMenu.channel !== 'mobil'}
          >
            <span style={{ marginLeft: '.5rem' }}>Mobil</span>
          </Link>

          {/* ** WHEN LAUNCHING SPRINGSTAR, ACTIVATE THIS ** */}
          {/* <Link 
            type="bubble-link"
            href="FILL IN URL !!!"
            icon="wireless"
            inverted={dropDownMenu.channel !== 'tv-internet'}
          >
            <span style={{ marginLeft: '.5rem' }}>TV og internett</span>
          </Link> */}
        </div>
      )}

      {type === 'B2B' && (
        <div className="menu__dropdown--links">
          <Link
            type="bubble-link"
            href="https://minbedrift.telia.no/"
            icon="mobile"
            inverted={dropdownMenu.channel !== 'min-bedrift'}
          >
            <span style={{ marginLeft: '.5rem' }}>Min Bedrift</span>
          </Link>
          <Link
            type="bubble-link"
            href="https://minportal.telia.no/"
            icon="wireless"
            inverted={dropdownMenu.channel !== 'min-portal'}
          >
            <span style={{ marginLeft: '.5rem' }}>Min Portal</span>
          </Link>
          <Link
            type="bubble-link"
            href="https://sb.telia.no/bn/login"
            icon="product-bedriftsnett"
            inverted={dropdownMenu.channel !== 'bedriftsnett'}
          >
            <span style={{ marginLeft: '.5rem' }}>Bedriftsnett</span>
          </Link>

          <div style={{ marginBottom: '1rem' }}></div>
          <Link
            href="https://www.telia.no/bedrift/info/"
            icon="list-view"
            iconPosition="before"
            iconColor="black"
            style={{ marginLeft: '2.25rem' }}
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
