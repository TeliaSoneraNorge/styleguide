import * as React from 'react';

export interface AccordionProps {
  isExpanded?: boolean;
  id?: string;
  title?: string;
  accordionRef?: any;
  children?: React.ReactNode;
  icon?: string;
  text?: string;
  button?: string;
  buttonType?: string;
  iconTitle?: string;
  imageUrl?: string;
  onButtonClick?: (...args: any[]) => any;
  toggleIsExpanded?: (...args: any[]) => any;
  footer?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps>;

export default Accordion;
