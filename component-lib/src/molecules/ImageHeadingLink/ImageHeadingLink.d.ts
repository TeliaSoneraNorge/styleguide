import * as React from 'react';

export interface ImageHeadingLinkProps {
  children?: React.ReactNode;
  src: string;
  alt?: string;
  href?: string;
  onClick?: (...args: any[]) => any;
}

export const ImageHeadingLink: React.FC<ImageHeadingLinkProps> & {
  Small: React.FC;
};

export default ImageHeadingLink;
