import * as React from 'react';

export interface AccordionListAccordionItems {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface AccordionListProps {
  accordionItems: AccordionListAccordionItems[];
  setItemRef?: (...args: any[]) => any;
  toggleIsExpanded?: (...args: any[]) => any;
  isExpandedAccordionIndex: number;
  noBorder?: boolean;
}

const AccordionList: React.FC<AccordionListProps>;

export default AccordionList;
