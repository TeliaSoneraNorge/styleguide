import React from 'react';
import Tabs from './Tabs';
import { Tab } from './Tab';

type Props = {
  selectedIndex?: number;
  uniqueId?: string;
  onSelect: (...args: any[]) => any;
};

export const TabList: React.FC<Props> = ({ children, selectedIndex, uniqueId, onSelect }) => (
  <ul className="tabs__list" role="tablist">
    {children.map((element, index) => (
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
