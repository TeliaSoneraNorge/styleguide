import * as React from 'react';

export type ImageInline = 'left' | 'right';

export interface ImageProps {
  inline?: ImageInline;
  src?: string;
  alt?: string;
}

export const Image: React.FC<ImageProps>;

export default Image;
