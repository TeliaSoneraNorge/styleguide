import React, { useState } from 'react';
import { Tabs, Heading } from '../../index';

export default {
  title: 'Component library|Molecules/Tabs',
  component: Tabs,
};

export const Default = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
  }

  return (
    <Tabs uniqueId="default-tabs" onSelect={onSelect} selectedIndex={selectedIndex}>
      <Tabs.TabPanel heading="Test 1">
        <Heading level={2} text="Tab 1" />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </Tabs.TabPanel>
      <Tabs.TabPanel heading="Test 2">
        <Heading level={2} text="Tab 2" />
        <p className="paragraph">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Tabs.TabPanel>
      <Tabs.TabPanel heading="Test 3">
        <Heading level={2} text="Tab 3" />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </Tabs.TabPanel>
      <Tabs.TabPanel heading="Test 4">
        <Heading level={2} text="Tab 4" />
        <p className="paragraph">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Tabs.TabPanel>
    </Tabs>
  );
}
