import React, { ReactElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';
import { TabsChild } from './TabsChild';

type Props = {
  uniqueId?: string;
  onSelect: (...args: any[]) => any;
  selectedIndex?: number;
  skipPanelRendering?: boolean;
  noMargin?: boolean;
  compact?: boolean;
  fullBorder?: boolean;
  children: TabsChild;
};

export const Tabs: React.FC<Props> = ({
  uniqueId,
  children,
  selectedIndex = 0,
  onSelect,
  skipPanelRendering,
  noMargin,
  compact,
  fullBorder,
}) => (
  <div
    className={classnames('tabs', {
      'tabs--no-margin': noMargin,
      'tabs--compact': compact,
      'tabs--full-border': fullBorder,
    })}
  >
    <TabList selectedIndex={selectedIndex} uniqueId={uniqueId} onSelect={onSelect}>
      {children}
    </TabList>

    {!skipPanelRendering && (
      <TabPanels selectedIndex={selectedIndex} uniqueId={uniqueId}>
        {children}
      </TabPanels>
    )}
  </div>
);
