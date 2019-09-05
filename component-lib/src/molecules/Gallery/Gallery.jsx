import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *Finished*
 * Category: ImageAndVideo
*/
const Gallery = ({ children }) => (
    <div className="gallery">
        {children}
    </div>
);

Gallery.propTypes = {
    /** Gallery images. */
    children: PropTypes.node
};

export default Gallery;