import * as React from 'react';

export interface StatefulAccordionListAccordionItems {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface StatefulAccordionListProps {
  accordionItems: StatefulAccordionListAccordionItems[];
  isExpandedAccordionIndex: number;
  className?: string;
  noBorder?: boolean;
}

export default class StatefulAccordionList extends React.Component<StatefulAccordionListProps, any> {
  render(): JSX.Element;
}
