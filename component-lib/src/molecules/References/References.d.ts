import * as React from 'react';

declare interface ReferencesItems {
  image: string;
  alt: string;
}

declare interface ReferencesProps {
  heading: string;
  items?: ReferencesItems[];
}

declare const References: React.FC<ReferencesProps>;

export default References;
