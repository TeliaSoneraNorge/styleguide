import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode | ReactNode[];
  hasBorder?: boolean;
  size?: number;
};

declare const FeatureBoxes: React.FC<Props>;

export default FeatureBoxes;
