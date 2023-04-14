import React from 'react';
import { TabsChild } from './TabsChild';

type Props = {
  selectedIndex?: number;
  uniqueId?: string;
  children: TabsChild;
};

export const TabPanels: React.FC<Props> = ({ children, uniqueId, selectedIndex }) => (
  <>
    {React.Children.map(children, (element, index) =>
      React.cloneElement(element, {
        key: element.props.heading,
        index,
        uniqueId,
        isSelected: index === selectedIndex,
      })
    )}
  </>
);
