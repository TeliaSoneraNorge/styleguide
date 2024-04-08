import * as React from 'react';

export interface BoxGrid {
  className?: string;
  children?: React.ReactNode;
}

export const BoxGrid: React.FC<BoxGrid>;

export default BoxGrid;
