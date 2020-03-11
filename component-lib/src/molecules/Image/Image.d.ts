import * as React from 'react';

export type ImageInline = 'left' | 'right';

export interface ImageProps {
  inline?: ImageInline;
  src?: string;
  alt?: string;
}

const Image: React.FC<ImageProps>;

export default Image;
