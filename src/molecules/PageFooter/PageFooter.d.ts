import * as React from 'react';

export interface PageFooterLinks {
  text: string;
  url: string;
}

export interface PageFooterSpecialLink {
  text: string;
  url: string;
}

export interface PageFooterProps {
  links?: PageFooterLinks[];
  specialLink?: PageFooterSpecialLink;
}

export const PageFooter: React.FC<PageFooterProps>;

export default PageFooter;
