import * as React from 'react';

export interface AccordionFlexibleProps {
  id?: string;

  titleIcon?: any;
  titleIcon2?: any;

  title?: string;

  titleMiddle?: string;
  previousTitleRight?: string;
  titleRight?: string;

  badge?: any;

  isExpanded?: bool;

  disclaimers?: any;

  children?: React.ReactNode;

  scrollToOnOpen?: bool;

  className?: string;

  onOpen?: (...args: any[]) => any;
}

export const AccordionFlexible: React.FC<AccordionFlexibleProps>;

export default AccordionFlexible;
