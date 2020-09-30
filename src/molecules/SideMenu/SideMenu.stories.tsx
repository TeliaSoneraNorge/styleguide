import React, { useState } from 'react';
import { SideMenu, SideMenuBottom, SideMenuTop, SideMenuItem, SideMenuHeader } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component library/Molecules/SideMenu',
  component: SideMenu,
};

export const Default = ({}) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div style={{ display: 'flex', height: '90vh' }}>
        <SideMenu aria-labelledby="main_menu">
          <SideMenuHeader onClick={() => console.log('')} label="Hello world" labelCompact="HW" />
          <SideMenuTop>
            <SideMenuItem label="Hjem" icon="home" onClick={() => setActive(0)} active={active === 0} href="/" />
            <SideMenuItem
              label="Abonnenter"
              icon="user"
              onClick={() => setActive(1)}
              active={active === 1}
              href="/abonnenter"
            />
            <SideMenuItem
              label="Økonomi"
              icon="money"
              onClick={() => setActive(2)}
              active={active === 2}
              href="/okonomi"
            />
          </SideMenuTop>

          <SideMenuBottom>
            <SideMenuItem label="Innstillinger" icon="settings" onClick={action('settings')} active={true} />
            <SideMenuItem label="Log ut" icon="logout" onClick={action('settings')} />
            <SideMenuItem label="Helene Grini" avatar={{ text: 'HG' }} onClick={action('settings')} />
          </SideMenuBottom>
        </SideMenu>
        <h4>Try to change the viewport size in the storybook toolbar </h4>
      </div>
    </>
  );
};
