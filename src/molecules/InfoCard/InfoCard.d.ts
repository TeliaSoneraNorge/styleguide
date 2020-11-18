import * as React from 'react';

export interface InfoCardProps {
  title: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  usps: string[];
}

export const InfoCard: React.FC<InfoCardProps>;

export default InfoCard;
