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
        <MobileNavBarMore items={[{ key: 'item', onClick: () => setActive(3), icon: 'abroad', label: 'Label' }]} />
      </MobileNavBar>
    </div>
  );
};

export const WithMoreOptionsScroll = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <MobileNavBar>
        <MobileNavBarItem key={'2sldkf'} onClick={() => setActive(0)} icon="search" active={active === 0} />
        <MobileNavBarItem
          key={'2.ds'}
          onClick={() => setActive(1)}
          icon="abroad"
          active={active === 1}
          hasNotification
        />
        <MobileNavBarItem key={'2xv,x.v'} onClick={() => setActive(2)} icon="gift" active={active === 2} />
        <MobileNavBarItem key={'2qow3'} onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        <MobileNavBarMore
          items={[
            { key: 'item_1', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_2', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'divider', divider: true },
            { key: 'item_3', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_4', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_5', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_6', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_7', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_8', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_9', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_10', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_11', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_12', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
            { key: 'item_13', onClick: () => setActive(3), icon: 'abroad', label: 'Label' },
          ]}
        />
      </MobileNavBar>
    </div>
  );
};

export const WithMoreOptionActive = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <MobileNavBar>
        <MobileNavBarItem key={'time-0'} onClick={() => setActive(0)} icon="search" active={active === 0} />
        <MobileNavBarItem
          key={'item-1'}
          onClick={() => setActive(1)}
          icon="abroad"
          active={active === 1}
          hasNotification
        />
        <MobileNavBarItem key={'item-2'} onClick={() => setActive(2)} icon="gift" active={active === 2} />
        <MobileNavBarItem key={'item-3'} onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        <MobileNavBarMore
          active={true}
          items={[
            { key: 'more-1', onClick: () => console.log('hei'), icon: 'abroad', label: 'Label', active: true },
            { key: 'more-2', onClick: () => console.log('hei'), icon: 'abroad', label: 'Label', active: true },
          ]}
        />
      </MobileNavBar>
    </div>
  );
};
