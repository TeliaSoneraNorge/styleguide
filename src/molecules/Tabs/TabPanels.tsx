import React from 'react';

type Props = {
  selectedIndex?: number;
  uniqueId?: string;
};
export const TabPanels: React.FC<Props> = ({ children, uniqueId, selectedIndex }) =>
  children.map((element, index) =>
    React.cloneElement(element, {
      key: element.props.heading,
      index,
      uniqueId,
      isSelected: index === selectedIndex,
    })
  );
