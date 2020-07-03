import * as React from 'react';

export interface GalleryProps {
  /**
   * Gallery images.
   */
  children?: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps>;

export default Gallery;
