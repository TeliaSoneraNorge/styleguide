import * as React from 'react';

export interface AccordionFlexibleProps {
  id?: string;

  icons?: any;

  title?: string;
  ingress?: string;

  titleRightLineThrough?: string;
  titleRight?: string;
  ingressRight?: string;

  badge?: any;

  expand?: boolean;

  disclaimers?: any;

  children?: any;

  scrollToOnOpen?: boolean;

  className?: string;

  onOpening?: (...args: any[]) => any;

  onClosing?: (...args: any[]) => any;
}

export const AccordionFlexible: React.FC<AccordionFlexibleProps>;

export default AccordionFlexible;
