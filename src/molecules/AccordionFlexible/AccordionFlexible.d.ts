import * as React from 'react';

export interface AccordionFlexibleProps {
  id?: string;

  icons?: any;

  titleLeft?: string;
  ingressLeft?: string;

  previousTitleSuffixRight?: string;
  previousTitleRight?: string;
  titleRight?: string;
  ingressRight?: string;

  badge?: any;

  isExpanded?: bool;

  disclaimers?: any;

  children?: any;

  scrollToOnOpen?: bool;

  className?: string;

  onOpened?: (...args: any[]) => any;

  onClosed?: (...args: any[]) => any;
}

export const AccordionFlexible: React.FC<AccordionFlexibleProps>;

export default AccordionFlexible;
