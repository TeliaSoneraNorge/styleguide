import * as React from 'react';

export interface ReferencesItems {
  image: string;
  alt: string;
}

export interface ReferencesProps {
  heading: string;
  items?: ReferencesItems[];
}

export const References: React.FC<ReferencesProps>;

export default References;
