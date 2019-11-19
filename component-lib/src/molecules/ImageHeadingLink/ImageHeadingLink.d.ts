import * as React from 'react';

export interface ImageHeadingLinkProps {
    children?: React.ReactNode;
    src: string;
    alt?: string;
    href?: string;
    onClick?: (...args: any[])=>any;
}

const ImageHeadingLink: React.FC<ImageHeadingLinkProps>;

export default ImageHeadingLink;
