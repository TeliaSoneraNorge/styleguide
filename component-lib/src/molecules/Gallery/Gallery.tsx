import React from 'react';

type Props = {
    children?: React.ReactNode;
};

/**
 * Status: *Finished*
 * Category: ImageAndVideo
 */
const Gallery = ({ children }: Props) => <div className="gallery">{children}</div>;

export default Gallery;
