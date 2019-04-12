import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * This should be used in `small` or `medium` width containers. In a `large`, the text lines become too long to read comfortably.
 */
const InfoBox = ({ title, children }) => (
    <div className="info-box">
        <Heading level="2" text={title} />
        {children}
    </div>
);

InfoBox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default InfoBox;
