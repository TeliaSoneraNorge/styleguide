import * as React from 'react';

export interface FullWidthImageProps {
  withMask?: boolean;
  withContentOverlap?: boolean;
  src: string;
  alt?: string;
}

const FullWidthImage: React.FC<FullWidthImageProps>;

export default FullWidthImage;
