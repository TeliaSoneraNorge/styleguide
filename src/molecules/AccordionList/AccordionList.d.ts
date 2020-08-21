import * as React from 'react';

export interface AccordionListAccordionItems {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: string;
  text?: string;
}

export interface AccordionListProps {
  accordionItems: AccordionListAccordionItems[];
  setItemRef?: (...args: any[]) => any;
  toggleIsExpanded?: (...args: any[]) => any;
  isExpandedAccordionIndex: number;
  noBorder?: boolean;
}

export const AccordionList: React.FC<AccordionListProps>;

export default AccordionList;
