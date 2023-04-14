import React from 'react';
import { Tab } from './Tab';
import { TabsChild } from './TabsChild';

type Props = {
  selectedIndex?: number;
  uniqueId?: string;
  onSelect: (...args: any[]) => any;
  children: TabsChild;
};

export const TabList: React.FC<Props> = ({ children, selectedIndex, uniqueId, onSelect }) => (
  <ul className="tabs__list" role="tablist">
    {React.Children.map(children, (element, index) => (
      <Tab
        key={element.props.heading}
        index={index}
        selectedIndex={selectedIndex}
        uniqueId={uniqueId}
        heading={element.props.heading}
        onSelect={onSelect}
      />
    ))}
  </ul>
);
