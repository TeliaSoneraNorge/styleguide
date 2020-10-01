import React, { useState } from 'react';
import { NavFooter, NavFooterItem } from './index';

export default {
  component: NavFooterItem,
  title: 'Component library/Molecules/NavFooter',
};
export const Default = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div style={{ paddingBottom: '2rem' }}>
        <NavFooter>
          <NavFooterItem onClick={() => setActive(0)} icon="search" active={active === 0} />
          <NavFooterItem onClick={() => setActive(1)} icon="abroad" active={active === 1} />
          <NavFooterItem onClick={() => setActive(2)} icon="gift" active={active === 2} />
          <NavFooterItem onClick={() => setActive(3)} icon="abroad" active={active === 3} />
        </NavFooter>
      </div>
      <NavFooter>
        <NavFooterItem onClick={() => setActive(0)} icon="search" href="/" active={active === 0} label="label" />
        <NavFooterItem onClick={() => setActive(1)} icon="abroad" active={active === 1} label="label" />
        <NavFooterItem onClick={() => setActive(2)} icon="gift" active={active === 2} label="long label long labes" />
        <NavFooterItem onClick={() => setActive(3)} icon="abroad" active={active === 3} label="l" />
      </NavFooter>
    </>
  );
};
