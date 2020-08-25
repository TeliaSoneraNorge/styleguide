import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import { colors } from '../../utils/colors';

type Props = {
    title?: string;
    children?: React.ReactNode;
};

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * This should be used in `small` or `medium` width containers. In a `large`, the text lines become too long to read comfortably.
 */
const InfoBox = ({ title, children }: Props) => (
  <div className="info-box">
    <Heading tag="h2" size="s" text={title} style={{ color: colors.black }} />
    {children}
  </div>
);

export default InfoBox;
