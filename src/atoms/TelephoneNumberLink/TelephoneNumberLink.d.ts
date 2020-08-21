import * as React from 'react';

export interface TelephoneNumberLinkProps {
  /**
   * Formatted telephone number e.g. '+47 924 05 050'
   */
  children: string;
}

export const TelephoneNumberLink: React.FC<TelephoneNumberLinkProps>;

export default TelephoneNumberLink;
