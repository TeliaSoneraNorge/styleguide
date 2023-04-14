import classnames from 'classnames';
import React from 'react';
import { TabsChild } from './TabsChild';

type Props = {
  index?: number;
  uniqueId?: string;
  isSelected?: boolean;
  heading?: string;
  children: TabsChild;
};

export const TabPanel: React.FC<Props> = ({ index, uniqueId, isSelected, children }) => (
  <div
    className={classnames('tabs__content', { 'tabs__content--selected': isSelected })}
    id={`${uniqueId}-panel-${index}`}
    aria-labelledby={`${uniqueId}-tab-${index}`}
    role="tabpanel"
  >
    {children}
  </div>
);
