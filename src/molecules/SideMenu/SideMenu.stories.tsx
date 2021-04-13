import React, { useState } from 'react';
import { SideMenu, SideMenuBottom, SideMenuTop, SideMenuItem } from './index';
import { action } from '@storybook/addon-actions';
import { enableTabKeyDetection } from '../../utils/enableTabKeyDetection';
import b from './business.svg';

export default {
  component: SideMenu,
  title: 'Component library/Molecules/SideMenu',
};

export const Default = () => {
  const [active, setActive] = useState(0);
  enableTabKeyDetection();

  return (
    <>
      <div style={{ display: 'flex', height: '90vh' }}>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
            <SideMenuTop>
              <SideMenuItem
                label="Rounded item"
                avatar={{ img: b }}
                onClick={action('user')}
                color="grey"
                kind="rounded"
              />
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
              <SideMenuItem
                label="Innstillinger"
                icon="settings"
                onClick={() => setActive(3)}
                active={active === 3}
                color="grey"
              />
              <SideMenuItem
                label="Log ut"
                icon="logout"
                onClick={() => setActive(4)}
                active={active === 4}
                color="grey"
              />
              <SideMenuItem
                kind="rounded"
                label="Helene Grini"
                avatar={{ text: 'HG' }}
                onClick={action('user')}
                color="grey"
              />
            </SideMenuBottom>
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
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
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
            <SideMenuBottom>
              <SideMenuItem label="Innstillinger" icon="settings" onClick={() => setActive(3)} active={active === 3} />
              <SideMenuItem label="Log ut" icon="logout" onClick={() => setActive(4)} active={active === 4} />
              <SideMenuItem label="Helene Grini" avatar={{ text: 'HG' }} onClick={action('user')} />
            </SideMenuBottom>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};
