import classnames from 'classnames';
import React from 'react';

type Props = {
  index?: number;
  uniqueId?: string;
  selectedIndex?: number;
  heading?: string;
  onSelect: (...args: any[]) => any;
};
export const Tab: React.FC<Props> = ({ index, uniqueId, selectedIndex, heading, onSelect }) => (
  <li
    className={classnames('tabs__list-item', { 'tabs__list-item--selected': selectedIndex === index })}
    id={`${uniqueId}-tab-${index}`}
    role="tab"
    aria-controls={`${uniqueId}-panel-${index}`}
    aria-selected={selectedIndex === index}
  >
    <button onClick={() => onSelect(index)} className="link tabs__button">
      {heading}
    </button>
  </li>
);
