import * as React from 'react';

export interface CardImg {
  src: string;
  alt: string;
}

export interface CardProps {
  title: string;
  link: string;
  isGrey?: boolean;
  removeUnderline?: boolean;
  img?: CardImg;
}

export const Card: React.FC<CardProps>;

export default Card;
