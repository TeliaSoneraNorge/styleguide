import * as React from 'react';

export interface InfoBoxProps {
  title?: string;
  children?: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps>;

export default InfoBox;
