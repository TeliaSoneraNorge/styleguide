import React from 'react';

import { MainMenu } from './MainMenu';
import { MainMenuItem } from './MainMenuItem';
import { Icon } from '../../atoms/Icon';

export default {
  title: 'Business/MainMenu',
  component: MainMenu,
};

export const Default = () => {
  function onClickItem() {
    console.log('onClickItem');
  }

  return (
    <>
      <h1>MainMenu</h1>

      <p>
        <em>
          If using the default icon set, remember to include <code>{'<AllBusinessIcons />'}</code> somewhere on the
          page.
        </em>
      </p>

      <div
        style={{
          maxWidth: '300px',
          marginRight: '30px',
        }}
      >
        <MainMenu>
          <MainMenuItem
            onClick={onClickItem}
            label="Hjem"
            icon={<Icon className="Business-MainMenu__icon" icon="home" />}
          />

          <MainMenuItem
            onClick={onClickItem}
            active={true}
            screenReaderSuffixWhenActive="current"
            label="Tjenester"
            icon="world"
          />

          <MainMenuItem onClick={onClickItem} label="Kart" icon="place" />

          <MainMenuItem onClick={onClickItem} label="Feilmeldinger" icon="email" />

          <MainMenuItem onClick={onClickItem} label="Kostnader" icon="money" />

          <MainMenuItem onClick={onClickItem} label="Fakturaer" icon="document" />

          <MainMenuItem onClick={onClickItem} label="Bestilling" icon="shoppingcart" />

          <MainMenuItem onClick={onClickItem} label="Personer" icon="user" />

          <MainMenuItem onClick={onClickItem} label="Dokumenter" icon="folder" />

          <MainMenuItem onClick={onClickItem} label="Logg" icon="time-waiting" />
        </MainMenu>
      </div>
    </>
  );
};
