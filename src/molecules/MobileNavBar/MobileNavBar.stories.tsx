import React, { useState } from 'react';
import { MobileNavBar, MobileNavBarItem } from './index';
import { MobileNavBarMore } from './MobileNavBarMore';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  component: MobileNavBar,
  title: 'Component library/Molecules/MobileNavBar',

  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};
export const Default = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div style={{ paddingBottom: '2rem' }}>
        <MobileNavBar>
          <MobileNavBarItem onClick={() => setActive(0)} icon="search" active={active === 0} />
          <MobileNavBarItem onClick={() => setActive(1)} icon="abroad" active={active === 1} hasNotification />
          <MobileNavBarItem onClick={() => setActive(2)} icon="gift" active={active === 2} />
          <MobileNavBarItem onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        </MobileNavBar>
      </div>

      <MobileNavBar>
        <MobileNavBarItem onClick={() => setActive(0)} icon="search" href="/" active={active === 0} label="label" />
        <MobileNavBarItem
          onClick={() => setActive(1)}
          icon="abroad"
          active={active === 1}
          label="label"
          hasNotification
        />
        <MobileNavBarItem
          onClick={() => setActive(2)}
          icon="gift"
          active={active === 2}
          label="long label long label"
        />
        <MobileNavBarItem onClick={() => setActive(3)} icon="abroad" active={active === 3} label="l" />
      </MobileNavBar>
    </div>
  );
};

export const WithMoreOption = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <MobileNavBar>
        <MobileNavBarItem onClick={() => setActive(0)} icon="search" active={active === 0} />
        <MobileNavBarItem onClick={() => setActive(1)} icon="abroad" active={active === 1} hasNotification />
        <MobileNavBarItem onClick={() => setActive(2)} icon="gift" active={active === 2} />
        <MobileNavBarItem onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        <MobileNavBarMore items={[{ onClick: () => setActive(3), icon: 'abroad', label: 'Label' }]} />
      </MobileNavBar>
    </div>
  );
};

export const WithMoreOptionsScroll = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <MobileNavBar>
        <MobileNavBarItem onClick={() => setActive(0)} icon="search" active={active === 0} />
        <MobileNavBarItem onClick={() => setActive(1)} icon="abroad" active={active === 1} hasNotification />
        <MobileNavBarItem onClick={() => setActive(2)} icon="gift" active={active === 2} />
        <MobileNavBarItem onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        <MobileNavBarMore
          items={[
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { divider: true },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { onClick: () => setActive(3), icon: 'abroad', label: 'Hello?' },
          ]}
        />
      </MobileNavBar>
    </div>
  );
};
