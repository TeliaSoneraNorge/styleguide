import React from 'react';
import PropTypes from 'prop-types';
import { Heading, colors } from '../../index';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * This should be used in `small` or `medium` width containers. In a `large`, the text lines become too long to read comfortably.
 */
const InfoBox = ({ title, children }) => (
  <div className="info-box">
    <Heading tag="h2" size="s" text={title} style={{ color: colors.black }} />
    {children}
  </div>
);

InfoBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default InfoBox;
