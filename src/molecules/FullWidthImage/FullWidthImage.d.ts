import * as React from 'react';

export interface logoSourcesProps {
  type: 'mobile' | 'desktop';
  srcSet: string;
}

export interface FullWidthImageProps {
  withMask?: boolean;
  withContentOverlap?: boolean;
  src: string;
  alt?: string;
  logoSources?: logoSourcesProps[];
  logoAlign?: string;
}

export const FullWidthImage: React.FC<FullWidthImageProps>;

export default FullWidthImage;
